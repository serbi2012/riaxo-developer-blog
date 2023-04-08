import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { client } = await connectToDatabase();
  const db = client.db();
  const collection = db.collection("posts");

  const post = {
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date(),
  };

  await collection.insertOne(post);

  res.status(201).json({ message: "Post created successfully" });
}
