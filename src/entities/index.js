import buildMakeUser from "./user";
import buildMakePhone from "./phone";
import buildMakeToken from "./token";
import { encryptPassword, randomString } from "../resources";
import { isNumber, isDateFormat, isGender } from "./helpers";
import { UserModel } from "../models";

const makePhone = buildMakePhone({ isNumber });
const makeToken = buildMakeToken({ randomString });
const makeUser = buildMakeUser({
  makePhone,
  makeToken,
  UserModel,
  encryptPassword,
  isDateFormat,
  isGender
});

export { makeUser, makePhone, makeToken };
