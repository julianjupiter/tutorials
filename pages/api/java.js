// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const posts = require('../../data/java.json');
  res.statusCode = 200
  res.json(posts)
}
