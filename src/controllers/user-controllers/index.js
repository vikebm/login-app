import makeCreateUser from "./create-user";
import makeCheckUser from "./check-user";
import { userService } from "../../uses-cases";

const addUser = makeCreateUser(userService.addUser);
const checkUser = makeCheckUser(userService.loginUser);

const userController = Object.freeze({
  addUser,
  checkUser
});

export default userController;

export { addUser, checkUser };
