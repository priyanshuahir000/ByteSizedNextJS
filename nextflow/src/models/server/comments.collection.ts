import { Permission } from "node-appwrite";
import { databases } from "./config";
import { commentsCollection, db } from "../name";

export default async function createCommentCollection() {
  await databases.createCollection(db, commentsCollection, commentsCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log("Comment Collection created");

  // Create Attributes
  await Promise.all([
    databases.createStringAttribute(
      db,
      commentsCollection,
      "content",
      10000,
      true
    ),
    databases.createEnumAttribute(db, commentsCollection, "type", ["answer", "question"], true),
    databases.createStringAttribute(db, commentsCollection, "typeId", 50, true),
    databases.createStringAttribute(
      db,
      commentsCollection,
      "authorId",
      50,
      true
    ),
  ]);
}
