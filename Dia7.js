export default function contains(store, product) {
  for (const x in store) {
    if (typeof store[x] === "object") {
      if (contains(store[x], product)) return true;
    } else {
      if (store[x] == product) {
        return true;
      }
    }
  }
  return false;
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

console.log(contains(almacen, "camiseta"));

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

console.log(contains(otroAlmacen, "gameboy"));
