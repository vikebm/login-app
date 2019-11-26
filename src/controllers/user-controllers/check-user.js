export default function makeCheckUser(loginUser) {
  return async function checkUser(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { ...userInfo } = httpRequest.body;
      const user = await loginUser({
        ...userInfo
      });
      return {
        headers,
        statusCode: 200,
        body: user
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
