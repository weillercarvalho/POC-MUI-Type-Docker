import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
} catch (error) {
  throw new Error("message:", { cause: error });
}

const db = mongoClient.db(`weather`);
export default db;
