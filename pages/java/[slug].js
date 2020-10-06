import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";

const Java = ({ content, frontmatter }) => {
  const { title, updatedAt } = frontmatter;

  return <>
    <h1>{title}</h1>
    <h3>Updated at {updatedAt}</h3>
    <ReactMarkdown escapeHtml={false} source={content} />
    </>
}

export default Java

export async function getStaticPaths() {
  const files = fs.readdirSync("contents/java");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
   const markdownWithMetadata = fs
    .readFileSync(path.join("contents/java", slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(data.updatedAt).toLocaleDateString("en-US", options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: content,
      frontmatter,
    },
  };
}