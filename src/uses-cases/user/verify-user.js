export default function makeVerifyUser({ usersDb }) {
  return async function verifyUser({ token } = {}) {
    if (!token) {
      throw { message: "Token requerido" };
    }

    const user = await usersDb.findByToken(token);

    if (!user) {
      throw { message: "El token no es válido o ya se usó" };
    }

    if (user.status) {
      throw { message: "Usuario ya verificado" };
    }

    const deleteToken = await usersDb.removeToken({ ...user });
    if (!deleteToken) {
      throw { message: "Error al borrar token" };
    }

    delete user.token;
    user.status = true;

    return usersDb.update(user);
  };
}
