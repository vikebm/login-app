export default function makeCreateUser(addUser) {
  return async function createUsers(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { ...userInfo } = httpRequest.body;
      await addUser({
        ...userInfo
      });
      return {
        headers,
        statusCode: 201,
        body: {
          message: "Usuario creado con éxito"
        }
      };
    } catch (e) {
      return {
        headers,
        statusCode: e.code ? 200 : 400,
        body: {
          error: {
            code: e.code,
            message: e.message
          }
        }
      };
    }
  };
}
