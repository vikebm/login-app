import bcrypt from "bcrypt";
export default async function comparePassword(password, user) {
  const isValid = await bcrypt.compare(password, user.password);
  return isValid;
}
