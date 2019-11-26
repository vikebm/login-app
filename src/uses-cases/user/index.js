import makeAddUser from "./add-user";
import makeLoginUser from "./login-user";
import { usersDb } from "../../data-access";
import { comparePassword, generateJwt } from "../../resources";

const addUser = makeAddUser({ usersDb });
const loginUser = makeLoginUser({ usersDb, comparePassword, generateJwt });
const userService = Object.freeze({
  addUser,
  loginUser
});

export default userService;

export { addUser, loginUser };
