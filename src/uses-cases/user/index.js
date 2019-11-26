import makeAddUser from "./add-user";
import makeLoginUser from "./login-user";
import makeListUsers from "./list-users";
import { usersDb } from "../../data-access";
import { comparePassword, generateJwt } from "../../resources";

const addUser = makeAddUser({ usersDb });
const loginUser = makeLoginUser({ usersDb, comparePassword, generateJwt });
const listUsers = makeListUsers({ usersDb });

const userService = Object.freeze({
  addUser,
  loginUser,
  listUsers
});

export default userService;

export { addUser, loginUser, listUsers };
