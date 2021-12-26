export default function shouldBuyFidelity(times) {
  const descuento = (n) => {
    let newDescuento = 12;
    if (n < 1) return 0;

    for (let i = 0; i < n; i++) newDescuento *= 0.75;

    return newDescuento + descuento(n - 1);
  };

  const entradaNormal = 12 * times;
  const tarjetaFidelidad = 250 + descuento(times);

  return tarjetaFidelidad < entradaNormal ? true : false;
}

shouldBuyFidelity(1); // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad
