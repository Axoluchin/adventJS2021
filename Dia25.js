export default function canMouseEat(direction, game) {
  let posicion;
  game.map((arreglo, y) =>
    arreglo.map((casilla, x) => {
      if (casilla == "m") {
        posicion = [y, x];
      }
    })
  );
  const opciones = {
    up: [posicion[0] - 1, posicion[1]],
    down: [posicion[0] + 1, posicion[1]],
    right: [posicion[0], posicion[1] + 1],
    left: [posicion[0], posicion[1] - 1],
  };

  try{
    return game[opciones[direction][0]][opciones[direction][1]] == "*"
    ? true
    : false;
  }
  catch{
      return false
  }
  
}

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

console.log(canMouseEat("up", room)); // false
console.log(canMouseEat("down", room)); // true
console.log(canMouseEat("right", room)); // false
console.log(canMouseEat("left", room)); // false

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

console.log(canMouseEat("up", room2)); // false
console.log(canMouseEat("down", room2)); // false
console.log(canMouseEat("right", room2)); // true
console.log(canMouseEat("left", room2)); // false
