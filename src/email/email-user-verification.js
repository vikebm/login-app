export default function makeSendMailUserVerification({ serverMail }) {
  return async function sendMailUserVerification(email, token) {
    const info = await serverMail.sendMail({
      from: '"PRUEBA" <YOURMAIL@DOMAIN.COM>',
      to: email,
      subject: "Verifica tu cuenta",
      html: "Token para validar cuenta: " + token
    });
    console.log("Message sent: %s", info.messageId);
  };
}
