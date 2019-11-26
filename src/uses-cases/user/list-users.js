export default function makeListUsers({ usersDb }) {
  return async function listUsers({ page, limit } = {}) {
    const users = await usersDb.findAll(page, limit);
    if (users.lenght === 0) {
      throw { code: 413, message: "No se encontraron usuarios" };
    }
    return users;
  };
}
