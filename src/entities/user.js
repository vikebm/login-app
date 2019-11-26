export default function buildMakeUser({
  makePhone,
  UserModel,
  encryptPassword,
  isDateFormat,
  isGender
}) {
  return async function makeUser({
    firstName,
    lastName,
    email,
    userName,
    gender,
    birthDate,
    phone,
    password,
    createdAt = new Date(Date.now()),
    updatedAt = new Date(Date.now())
  }) {
    if (!firstName) {
      throw { message: "Nombre requerido" };
    }

    if (!lastName) {
      throw { message: "Apellido requerido" };
    }

    if (!email) {
      throw { message: "Correo requerido" };
    }

    if (!userName) {
      throw { message: "Nombre de usuario requerido" };
    }

    if (!phone) {
      throw { message: "Teléfono requerido" };
    }

    if (!gender) {
      throw { message: "Sexo requerido" };
    }

    if (!isGender(gender)) {
      throw { message: "Genero inválido" };
    }

    if (!birthDate) {
      throw { message: "Fecha de nacimiento requerida" };
    }

    if (!isDateFormat(birthDate)) {
      throw { message: "Formato de fecha inválido" };
    }

    if (!password) {
      throw { message: "Contraseña requerida" };
    }

    const phoneToInsert = makePhone({ ...phone });

    const userToInsert = new UserModel({
      firstName,
      lastName,
      email: email.toLowerCase(),
      userName: userName.toLowerCase(),
      gender,
      birthDate,
      phone: phoneToInsert,
      password: await encryptPassword(password),
      status: false,
      createdAt,
      updatedAt
    });

    return userToInsert;
  };
}
