export default function countDecorations(bigTree) {
  if (!bigTree) {
    return 0;
  }
  return (
    bigTree.value +
    countDecorations(bigTree.left) +
    countDecorations(bigTree.right)
  );
}

// tenemos el árbol en forma de objeto
const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
};

/* Gráficamente sería así:
      1
    /   \
   2     3
  
  1 + 2 + 3 = 6
  */

console.log(countDecorations(tree)); // 6
