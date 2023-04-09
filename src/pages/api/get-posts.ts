import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { client } = await connectToDatabase();
  const db = client.db();
  const collection = db.collection("posts");

  const posts = await collection.find().toArray();

  res.status(200).json(posts);
}
