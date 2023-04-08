import { MongoClient } from "mongodb";

const { NEXT_PUBLIC_MONGODB_URI } = process.env;

if (!NEXT_PUBLIC_MONGODB_URI) {
  throw new Error(
    "Please define the NEXT_PUBLIC_MONGODB_URI environment variable inside .env.local"
  );
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return { client: cachedClient };
  }

  const uri =
    typeof NEXT_PUBLIC_MONGODB_URI === "string" ? NEXT_PUBLIC_MONGODB_URI : "";

  const client = await MongoClient.connect(uri);

  cachedClient = client;

  return { client: cachedClient };
}
