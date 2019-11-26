export default function makeUsersDb({ makeDb }) {
  return Object.freeze({
    insert,
    findByUserName,
    findByEmail,
    findAll
  });

  async function insert(user) {
    await makeDb();
    await user.save();
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
}
