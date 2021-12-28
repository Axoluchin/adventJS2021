export default function canCarry(capacity, trip) {
  const finCamino = Math.max(trip[0][2], trip[trip.length - 1][2]);
  let carga = 0;

  for (let camino = 0; camino <= finCamino; camino++) {
    if (trip[0][1] == camino) {
      carga += trip[0][0];
    } else if (trip[trip.length - 1][1] == camino) {
      carga += trip[trip.length - 1][0];
    }

    if (trip[0][2] == camino) {
      carga -= trip[0][0];
    } else if (trip[trip.length - 1][2] == camino) {
      carga -= trip[trip.length - 1][0];
    }

    if (carga > capacity) {
      return false;
    }
  }
  return true;
}

console.log(
  canCarry(4, [
    [2, 5, 8],
    [3, 6, 10],
  ])
); // false
console.log(
  canCarry(3, [
    [1, 1, 5],
    [2, 2, 10],
  ])
); // true

canCarry(3, [
  [2, 1, 5],
  [3, 5, 7],
]); // true -> nunca supera el máximo de capacidad
canCarry(4, [
  [2, 3, 8],
  [2, 5, 7],
]); // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo
canCarry(1, [[2, 3, 8]]); // false -> no podría ni con el primer viaje
canCarry(2, [
  [1, 2, 4],
  [2, 3, 8],
]); // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
