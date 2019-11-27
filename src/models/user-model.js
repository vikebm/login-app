import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    firstName: { type: String, required: [true] },
    lastName: { type: String, required: [true] },
    email: {
      type: String,
      required: [true]
    },
    userName: {
      type: String,
      required: [true]
    },
    gender: {
      type: String,
      required: [true]
    },
    birthDate: {
      type: String,
      required: [true]
    },
    phone: {
      type: Object,
      required: [true]
    },
    token: {
      type: Object
    },
    password: { type: String, required: [true] },
    status: false,
    createdAt: Date,
    updatedAt: Date
  },
  { versionKey: false }
);

let UserModel;

if (mongoose.models.users) {
  UserModel = mongoose.model("users");
} else {
  UserModel = mongoose.model("users", userSchema);
}

export default UserModel;
