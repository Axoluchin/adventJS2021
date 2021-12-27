export default function checkSledJump(heights) {
  let subida = 0;
  if (heights.length < 3) return false;

  for (let first = 0; first < heights.length - 1; first++) {
    if (heights[first] > heights[first + 1]) {
      if (subida > 0) subida--;
    } else if (heights[first] < heights[first + 1]) {
      subida++;
    } else {
      return false;
    }
  }

  if (subida) return false;

  return true;
}

console.log(checkSledJump([0, 1000, 1])); // -> true

console.log(checkSledJump([1, 2, 3])); // false

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
