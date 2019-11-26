export default function makeBuildPhone({ isNumber }) {
    return function makePhone({ code, number } = {}) {
      if (!code) {
        throw { message: "El teléfono debe tener un código válido" };
      }
  
      if (!isNumber(number)) {
        throw { message: "El teléfono debe tener un número válido" };
      }
  
      return Object.freeze({
        code: code,
        number: number
      });
    };
  }
  