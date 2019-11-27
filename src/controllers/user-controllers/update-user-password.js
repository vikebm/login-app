export default function makeUpdateUserPassword(editUserPassword) {
    return async function updateUserPassword(httpRequest) {
      try {
        const { ...userInfo } = httpRequest.body;
        const passwordEdit = {
          ...userInfo
        };
        await editUserPassword(passwordEdit);
        
        return {
          headers: {
            "Content-Type": "application/json"
          },
          statusCode: 200,
          body: {
            message: "Contraseña actualizada exitosamente"
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
  