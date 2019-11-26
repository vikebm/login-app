import mongoose from "mongoose";
import makeUsersDb from "./users-db";

const dbPath = "mongodb://localhost:27017/test-db";

export async function makeDb() {
  mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on("error", () => {
    console.log("> error occurred from the database");
  });
  db.once("open", () => {
    console.log("> successfully opened the database");
  });
  return db;
}

const usersDb = makeUsersDb({ makeDb });
export { usersDb };
