export default function getMinJump(obstacles) {
  let pasa = false;

  for (let saltos = 1; saltos <= Math.max(...obstacles); saltos++) {
    pasa = true;
    
    for (let pasos = 0; pasos <= Math.max(...obstacles); pasos += saltos)
      if (obstacles.includes(pasos)) pasa = false;

    if (pasa) return saltos;
  }
}

const obstacles = [5, 3, 6, 7, 9];

console.log(getMinJump(obstacles)); // -> 4

console.log(getMinJump([2, 4, 6, 8, 10]));
