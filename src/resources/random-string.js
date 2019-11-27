import cuid from "cuid";

const randomString = Object.freeze({
  create: cuid.slug,
  isValid: cuid.isSlug
});

export default randomString;
