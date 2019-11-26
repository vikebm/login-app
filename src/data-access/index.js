import mongoose from "mongoose";
import makeUsersDb from "./users-db";

const dbPath = "mongodb://localhost:27017/test-db";

mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("> error occurred from the database");
  throw { message: "Error en conexión con base de datos" };
});
db.once("open", () => {
  console.log("> successfully opened the database");
});

export async function makeDb() {
  return db;
}

const usersDb = makeUsersDb({ makeDb });
export { usersDb };
