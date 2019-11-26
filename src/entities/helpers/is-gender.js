const options = ["M", "F", "U"];
export default function isGender(type) {
  return type != null ? options.indexOf(type.toUpperCase()) > -1 : false;
}
