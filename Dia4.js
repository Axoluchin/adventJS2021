/*
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la
altura del árbol, que será un entero positivo del
1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____
Creamos un triángulo de asteríscos * con la altura
proporcionada y, a los lados, usamos el guión bajo _
para los espacios. Es muy importante que nuestro árbol
siempre tenga la misma longitud por cada lado.Todos los
árboles, por pequeños o grandes que sean, tienen un
tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

    __*__
    _***_
    *****
    __#__
    __#__
Ten en cuenta que el árbol es un string y necesitas los
saltos de línea \n para cada línea para que se forme bien
el árbol.
*/

export default function createXmasTree(height) {
  let arbol = "";
  const max_len = height * 2 - 1;
  const len = (num) => num * 2 - 1;

  for (let x = 1; x <= height; x++) {
    for (let z = 0; z < (max_len - len(x)) / 2; z++) {
      arbol = arbol.concat("_");
    }
    for (let z = 0; z < x * 2 - 1; z++) {
      arbol = arbol.concat("*");
    }
    for (let z = 0; z < (max_len - len(x)) / 2; z++) {
      arbol = arbol.concat("_");
    }
    arbol = arbol.concat("\n");
  }
  for (let x = 1; x <= 2; x++) {
    for (let z = 0; z < (max_len - len(1)) / 2; z++) {
      arbol = arbol.concat("_");
    }
    arbol = arbol.concat("#");
    for (let z = 0; z < (max_len - len(1)) / 2; z++) {
      arbol = arbol.concat("_");
    }
    if (x == 1)arbol = arbol.concat("\n");
  }
  return arbol;
}

console.log(createXmasTree(5));
