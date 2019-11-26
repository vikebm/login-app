import jwt from "jsonwebtoken";
export default function generateJwt({ ...user }) {
  const payload = { user: user };
  const options = { expiresIn: 3600 };
  const secret = "password";
  const token = jwt.sign(payload, secret, options);
  return token;
}
