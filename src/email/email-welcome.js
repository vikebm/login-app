export default function makeSendMailWelcome({ serverMail }) {
  return async function sendMailWelcome(email) {
    const info = await serverMail.sendMail({
      from: '"PRUEBA"<YOURMAIL@DOMAIN.COM>',
      to: email,
      subject: "Bienvenido",
      html: "Bienvenido"
    });
    console.log("Message sent: %s", info.messageId);
  };
}
