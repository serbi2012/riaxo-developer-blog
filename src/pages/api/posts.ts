import { NextApiRequest, NextApiResponse } from "next";

const posts = [
  {
    title: "First Post",
    date: "2023-04-01",
    content: "This is the first blog post.",
  },
  {
    title: "Second Post",
    date: "2023-04-02",
    content: "This is the second blog post.",
  },
];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(posts);
};

export default handler;
