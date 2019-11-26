export default function makeLoginUser({
  usersDb,
  comparePassword,
  generateJwt
}) {
  return async function loginUser({ userName, password } = {}) {
    if (!userName) {
      throw { message: "Nombre de usuario requerido" };
    }

    if (!password) {
      throw { message: "Contraseña requerida" };
    }

    const user = await usersDb.findByUserName(userName);

    if (!user) {
      throw { code: 411, message: "Usuario no encontrado" };
    }

    const match = await comparePassword(password, user);

    if (!match) {
      throw { code: 412, message: "Contraseña inválida" };
    }

    delete user.password;

    return {
      ...user,
      token: generateJwt({ user })
    };
  };
}
