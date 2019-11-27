import makeCreateUser from "./create-user";
import makeCheckUser from "./check-user";
import makeGetUsers from "./get-users";
import makeCheckEmail from "./check-email";
import makeCreateToken from "./create-token";
import makeUpdateUserPassword from "./update-user-password";
import { userService } from "../../uses-cases";

const addUser = makeCreateUser(userService.addUser);
const checkUser = makeCheckUser(userService.loginUser);
const getUsers = makeGetUsers(userService.listUsers);
const checkEmail = makeCheckEmail(userService.verifyUser);
const createToken = makeCreateToken(userService.addToken);
const updateUserPassword = makeUpdateUserPassword(userService.editPassword);
const userController = Object.freeze({
  addUser,
  checkUser,
  getUsers,
  checkEmail,
  createToken,
  updateUserPassword
});

export default userController;

export {
  addUser,
  checkUser,
  getUsers,
  checkEmail,
  createToken,
  updateUserPassword
};
