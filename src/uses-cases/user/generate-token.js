import { makeToken } from "../../entities";
export default function makeGenerateToken({ usersDb }) {
  return async function generateToken({ email, type } = {}) {
    const token = makeToken();

    if (!email) {
      throw { message: "Correo requerido" };
    }
    if (!token) {
      throw { message: "Error en generación de token" };
    }

    const user = await usersDb.findByEmail(email);

    if (!user) {
      throw {
        message: "Usuario no encontrado"
      };
    }

    const userToUpdate = await usersDb.update({
      ...user,
      token
    });

    return userToUpdate;
  };
}
