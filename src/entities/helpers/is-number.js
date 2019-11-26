export default function isNumber(number) {
    return RegExp("^([0-9])*$").test(number);
  }
  