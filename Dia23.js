export default function canReconfigure(from, to) {
  const traduccion = {};

  for (let i = 0; i < from.length; i++) {
    if (!traduccion[from[i]]) {
      for (const key in traduccion) {
        if (traduccion[key] == to[i]) {
          return false;
        }
      }
      traduccion[from[i]] = to[i];
    } else if (traduccion[from[i]] != to[i]) {
      return false;
    }
  }

  return true;
}

let from = "BAL";
let to = "LIB";

from = "CON";
to = "JUU";
console.log(canReconfigure(from, to)); // false

/* la transformación sería así:

console.log(canReconfigure(from, to)); // true

B -> L
A -> I
L -> B




from = "XBOX";
to = "XOBX";
console.log(canReconfigure(from, to)); // true

from = "MMM";
to = "MID";
console.log(canReconfigure(from, to)); // false

from = "AA";
to = "MID";
console.log(canReconfigure(from, to)); // false -> no tiene la misma longitud


*/
