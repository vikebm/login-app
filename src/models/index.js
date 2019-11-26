import buildMakeUser from "./user";
import mongoose from "mongoose";
import { encryptPassword } from "../resources";

const makeUser = buildMakeUser({
  mongoose,
  encryptPassword
});

export { makeUser };
