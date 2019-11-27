export default function makeEditPasswordUser({
    usersDb,
    encryptPassword,
    isTokenValid
  }) {
    return async function editUserPassword({ token, password } = {}) {
      if (!token) {
        throw { message: "Token requerido" };
      }
  
      const user = await usersDb.findByToken(token);
  
      if (!user) {
        throw { code: 412, message: "Token inválido" };
      }
  
      if (!isTokenValid(user.token)) {
        throw { code: 412, message: "Token vencido" };
      }
  
      const passwordEncode = await encryptPassword(password);
  
      user.password = passwordEncode;
      user.updatedAt = new Date(Date.now());
  
      const deleteToken = await usersDb.removeToken({ ...user });
      if (!deleteToken) {
        throw { message: "Error al eliminar el token" };
      }
  
      delete user.token;
  
      return usersDb.update(user);
    };
  }
  