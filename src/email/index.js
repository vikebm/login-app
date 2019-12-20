import { serverMail } from "../resources";
import makeSendMailWelcome from "./email-welcome";
import makeSendMailUserVerification from "./email-user-verification";
import makeSendMailResetPassword from "./email-reset-password-user";

const sendMailWelcome = makeSendMailWelcome({ serverMail });
const sendMailUserVerification = makeSendMailUserVerification({ serverMail });
const sendMailResetPassword = makeSendMailResetPassword({ serverMail });

const sendMailService = Object.freeze({
  sendMailWelcome,
  sendMailUserVerification,
  sendMailResetPassword
});

export default sendMailService;
export { sendMailWelcome, sendMailUserVerification, sendMailResetPassword };
