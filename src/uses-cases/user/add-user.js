import { makeUser } from "../../entities";
export default function makeAddUser({ usersDb, sendMailService }) {
  return async function addUser({ userName, email, ...user }) {
    const userToInsert = await makeUser({ userName, email, ...user });
    const existingUserName = await usersDb.findByUserName(userName);
    const existingEmail = await usersDb.findByEmail(email);

    if (existingUserName) {
      throw { code: 409, message: "Nombre de usuario no disponible" };
    }

    if (existingEmail) {
      throw { code: 410, message: "Correo electrónico no disponible" };
    }

    await sendMailService.sendMailWelcome(userToInsert.email);

    await sendMailService.sendMailUserVerification(
      userToInsert.email,
      userToInsert.token.value
    );

    await usersDb.insert(userToInsert);
  };
}
