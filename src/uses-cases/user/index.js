import makeAddUser from "./add-user";
import makeLoginUser from "./login-user";
import makeListUsers from "./list-users";
import makeEditPasswordUser from "./edit-user-password";
import makeGenerateToken from "./generate-token";
import makeVerifyUser from "./verify-user";
import sendMailService from "../../email";
import { usersDb } from "../../data-access";
import { comparePassword, generateJwt, encryptPassword } from "../../resources";
import { isTokenValid } from "../../entities/helpers";

const addUser = makeAddUser({ usersDb, sendMailService });
const addToken = makeGenerateToken({ usersDb });
const loginUser = makeLoginUser({ usersDb, comparePassword, generateJwt, sendMailService });
const verifyUser = makeVerifyUser({ usersDb });
const listUsers = makeListUsers({ usersDb });
const editPassword = makeEditPasswordUser({
  usersDb,
  encryptPassword,
  isTokenValid,
  sendMailService
});

const userService = Object.freeze({
  addUser,
  loginUser,
  listUsers,
  editPassword,
  addToken,
  verifyUser
});

export default userService;

export { addUser, loginUser, listUsers, editPassword, addToken, verifyUser };
