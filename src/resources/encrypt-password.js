import bcrypt from "bcrypt";
export default async function encryptPassword(password) {
  const saltRounds = 10;
  const passwordEncode = await bcrypt
    .hash(password, saltRounds)
    .then(function(hash) {
      return hash;
    });

  return passwordEncode;
}
