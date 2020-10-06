import Link from 'next/link'
import fs from "fs";
import matter from "gray-matter";
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Java = ({ posts }) => {
    console.log(posts)
    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <ListGroup>
                        {posts.map(({ slug, frontmatter: { title } }, index) => <ListGroup.Item key={index} action href={`/java/${slug}`}>{title}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Java;

export async function getStaticProps() {
    const files = fs.readdirSync(`${process.cwd()}/contents/java`);

    let posts = files.map((filename) => {
        const markdownWithMetadata = fs
            .readFileSync(`contents/java/${filename}`)
            .toString();

        const { data } = matter(markdownWithMetadata);

        console.log(data.updatedAt)

        // Convert post date to format: Month day, Year
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = new Date(data.updatedAt).toLocaleDateString("en-US", options);

        const frontmatter = {
            ...data,
            updatedAt: formattedDate,
        };

        return {
            slug: filename.replace(".md", ""),
            frontmatter,
        };
    });

    posts = posts.sort((a, b) => a.frontmatter.number - b.frontmatter.number);

    return {
        props: {
            posts,
        },
    };
}