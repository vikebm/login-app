export default function makeCheckEmail(verifyUser) {
  return async function checkEmail(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { token } = httpRequest.body;
      await verifyUser({ token });

      return {
        headers,
        statusCode: 200,
        body: {
          message: "Usuario validado con exito"
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
