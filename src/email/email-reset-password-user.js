export default function makeSendMailResetPassword({ serverMail }) {
  return async function sendMailResetPassword(email, user, token) {
    const info = await serverMail.sendMail({
      from: '"PRUEBA" <YOURMAIL@DOMAIN.COM>',
      to: email,
      subject: "Restablecer contraseña",
      html: "Token para reestablecer contrase;a " + token
    });
    console.log("Message sent: %s", info.messageId);
  };
}
