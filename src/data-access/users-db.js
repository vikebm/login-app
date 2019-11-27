export default function makeUsersDb({ makeDb }) {
  return Object.freeze({
    insert,
    findByUserName,
    findByEmail,
    findAll,
    update,
    findByToken,
    removeToken
  });

  async function insert(user) {
    await makeDb();
    await user.save();
  }

  async function update({ id: _id, ...user }) {
    const db = await makeDb();
    const result = await db
      .collection("users")
      .updateOne({ _id }, { $set: { ...user } });
    return result.modifiedCount > 0 ? { id: _id, ...user } : null;
  }

  async function findByUserName(userName) {
    const db = await makeDb();
    const query = {
      $or: [
        { userName: userName.toLowerCase() },
        { email: userName.toLowerCase() }
      ]
    };
    const result = await db.collection("users").find(query);

    const found = await result.toArray();
    if (found.length === 0) {
      return null;
    }
    const { _id: id, ...info } = found[0];
    return { id, ...info };
  }

  async function findByEmail(email) {
    const db = await makeDb();
    const result = await db
      .collection("users")
      .find({ email: email.toLowerCase() })
      .project({ password: 0 });
    const found = await result.toArray();
    if (found.length === 0) {
      return null;
    }
    const { _id: id, ...info } = found[0];
    return { id, ...info };
  }

  async function findAll(page, limit) {
    let pageToSearch = parseInt(page || 1);
    let paginate = parseInt(limit || 10);
    const db = await makeDb();
    const result = await db
      .collection("users")
      .find({})
      .sort({ _id: -1 })
      .limit(paginate)
      .skip((pageToSearch - 1) * paginate)
      .project({ password: 0 }, { token: 0 });

    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }));
  }

  async function findByToken(token) {
    const db = await makeDb();
    const result = await db
      .collection("users")
      .find({ "token.value": token })
      .project({ password: 0 });
    const found = await result.toArray();
    if (found.length === 0) {
      return null;
    }
    const { _id: id, ...info } = found[0];
    return { id, ...info };
  }

  async function removeToken({ id: _id }) {
    const db = await makeDb();
    const result = await db
      .collection("users")
      .updateOne({ _id }, { $unset: { token: "" } });
    return result.modifiedCount > 0 ? "Token successfully removed" : null;
  }
}
