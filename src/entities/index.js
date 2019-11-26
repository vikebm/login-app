import buildMakeUser from "./user";
import buildMakePhone from "./phone";
import { encryptPassword } from "../resources";
import { isNumber, isDateFormat, isGender } from "./helpers";
import { UserModel } from "../models";

const makePhone = buildMakePhone({ isNumber });
const makeUser = buildMakeUser({
  makePhone,
  UserModel,
  encryptPassword,
  isDateFormat,
  isGender
});

export { makeUser, makePhone };
