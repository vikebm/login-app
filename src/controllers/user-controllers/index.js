import makeCreateUser from "./create-user";
import makeCheckUser from "./check-user";
import makeGetUsers from "./get-users"
import { userService } from "../../uses-cases";

const addUser = makeCreateUser(userService.addUser);
const checkUser = makeCheckUser(userService.loginUser);
const getUsers = makeGetUsers(userService.listUsers);

const userController = Object.freeze({
  addUser,
  checkUser,
  getUsers
});

export default userController;

export { addUser, checkUser, getUsers };
