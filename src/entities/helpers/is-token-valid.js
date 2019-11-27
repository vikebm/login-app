export default function isTokenValid(token) {
  const today = new Date(Date.now()).getTime();
  return today > token.expirationDate ? false : true;
}
