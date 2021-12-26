export default function getCoins(change) {
  const valor = [1, 2, 5, 10, 20, 50];
  const cambio = [0, 0, 0, 0, 0, 0];
  for (let i = cambio.length - 1; i >= 0; i--) {
    while (change - valor[i] >= 0) {
      change -= valor[i];
      cambio[i]++;
    }
  }
  return cambio;
}

console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
