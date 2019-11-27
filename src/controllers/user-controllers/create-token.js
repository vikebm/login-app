export default function makeCreateToken(addToken) {
  return async function createToken(httpRequest) {
    try {
      let { ...data } = httpRequest.body;
      await addToken({
        ...data
      });
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: {
          message: "Token generado correctamente"
        }
      };
    } catch (e) {
      return {
        headers: {
          "Content-Type": "application/json"
        },
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
