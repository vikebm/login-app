export default function buildMakeUser({ mongoose, encryptPassword }) {
  return async function makeUser({
    firstName,
    lastName,
    email,
    userName,
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

    if (!password) {
      throw { message: "Contraseña requerida" };
    }

    const Schema = mongoose.Schema;

    const userSchema = new Schema(
      {
        firstName: { type: String, required: [true] },
        lastName: { type: String, required: [true] },
        email: {
          type: String,
          required: [true]
        },
        userName: {
          type: String,
          required: [true]
        },
        password: { type: String, required: [true] },
        status: false,
        createdAt: Date,
        updatedAt: Date
      },
      { versionKey: false }
    );

    let UserModel;

    if (mongoose.models.users) {
      UserModel = mongoose.model("users");
    } else {
      UserModel = mongoose.model("users", userSchema);
    }

    const userToInsert = new UserModel({
      firstName,
      lastName,
      email: email.toLowerCase(),
      userName: userName.toLowerCase(),
      password: await encryptPassword(password),
      status: false,
      createdAt,
      updatedAt
    });

    return userToInsert;
  };
}
