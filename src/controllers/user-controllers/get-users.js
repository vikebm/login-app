export default function makeGetUsers(listUsers) {
  return async function getUsers(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const users = await listUsers({
        page: httpRequest.query.page,
        limit: httpRequest.query.limit
      });
      return {
        headers,
        statusCode: 200,
        body: users
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
