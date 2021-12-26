export default function maxProfit(prices) {
  let ganancia = -1;

  let precioMenor = prices[0];
  let precioMayor = 0;

  for (let i = 1; i < prices.length; i++) {
    const valor = prices[i];

    if (valor < precioMenor && i < prices.length - 1) {
      precioMenor = valor;
    } else if (valor > precioMayor) {
      precioMayor = valor;
    }
  }

  if(precioMenor < precioMayor){
    ganancia = precioMayor-precioMenor
  }

  return ganancia;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7];
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)
