# adventJS 2021

> Resolviendo los 25 días de retos con JavaScript de adventjs.dev

[adventJS](https://adventjs.dev/) es un evento de [midu.dev](https://midu.dev), donde por 25 días tendremos que resolver un problema usando JavaScript

En este repositorio subiré como resolví los 25 retos, esperando completarlo antes de acabar 2021 🤠

# [Día 1 | Contando ovejas para dormir](https://adventjs.dev/challenges/01)

> Con la emoción de que llega la navidad, nos está costando dormir bastante últimamente. Vamos a intentar usar este pequeño truco que nos ayudará a dormir más rápido 🐑.

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color _rojo_ **y que además** su nombre contenga tanto las letras _n_ Y _a_, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

```js
const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];
```

Al ejecutar el método debería devolver lo siguiente:

```js
const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

## Mi solución

```js
export default function contarOvejas(ovejas) {
  return ovejas.filter(
    ({ name, color }) =>
      color == "rojo" && name.search("[aA]") != -1 && name.search("[nN]") != -1
  );
}
```

# [Día 2 | Ayuda al elfo a listar los regalos](https://adventjs.dev/challenges/02)

> ¡Menudo lío 😵! Un elfo está ayudando a Santa Claus. Pensaba que le vendría ya ordenado de cada regalo cuantas unidades debe conseguir... ¡y le ha llegado una carta ✉️! ¡Ayúdale!

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un **\_** delante de la palabra, por ejemplo **\_playstation**, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

```js
const carta = "bici coche balón _playstation bici coche peluche";
```

Al ejecutar el método debería devolver lo siguiente:

```js
const regalos = listGifts(carta);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!

## Mi solución

```js
export default function listGifts(letter) {
  const regalo = letter.split(/\s/);
  const lista = {};
  regalo.map((x) => {
    if (x.charAt() != "_" && x.charAt() != "") {
      if (!lista[x]) {
        lista[x] = 1;
      } else {
        lista[x]++;
      }
    }
  });
  return lista;
}
```

# [Día 3 | El Grinch quiere fastidiar la Navidad](https://adventjs.dev/challenges/03)

> ¡El Grinch anda suelto y quiere fastidiar la Navidad! 😱 Vamos a arreglar el lío que ha montado en la fábrica de regalos de Santa Claus

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

```js
"bici coche (balón) bici coche peluche"; // -> ✅
"(muñeca) consola bici"; // ✅

"bici coche (balón bici coche"; // -> ❌
"peluche (bici [coche) bici coche balón"; // -> ❌
"(peluche {) bici"; // -> ❌
"() bici"; // ❌
```

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

## Mi solución

```js
export default function isValid(letter) {
  if (letter.search(/[{}\[\]]/g) != -1) return false;
  if (letter.search(/\(/g) == -1 || letter.search(/\)/g) == -1) return false;
  if (letter.search(/\(/g) - letter.search(/\)/g) == -1) return false;
  if (letter.charAt(letter.search(/\)/i) - 1) == "(") return false;
  return true;
}
```

# [Día 4 | ¡Es hora de poner la navidad en casa!](https://adventjs.dev/challenges/04)

> Creo que ya podemos sacar el gorro navideño, el turrón... ¡Y el árbol de navidad! 🎄 Vamos a montarlo con JavaScript.

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

```
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Creamos un triángulo de asteríscos \* con la altura proporcionada y, a los lados, usamos el guión bajo \_ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

```
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.

## Mi solución

```js
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
    if (x == 1) arbol = arbol.concat("\n");
  }
  return arbol;
}
```

# [Día 5 | Contando los días para los regalos](https://adventjs.dev/challenges/05)

> ¡Qué ganas de abrir los regalos 🎁! Estoy tan nervioso que no paro de contar los días que faltan 🤣. ¿Me ayudas creando un programita? ¡Venga!

Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de `Date` nos diga el número de días que faltan.

Veamos unos ejemplos:

```js
const date1 = new Date("Dec 1, 2021");
daysToXmas(date1); // 24
const date2 = new Date("Dec 24, 2021 00:00:01");
daysToXmas(date2); // 1
const date3 = new Date("Dec 24, 2021 23:59:59");
daysToXmas(date3); // 1
const date4 = new Date("December 20, 2021 03:24:00");
daysToXmas(date4); // 5
```

El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos `0`) o si es una fecha futura (devolveríamos el número de días en negativo `-`):

```js
const date = new Date("Dec 25, 2021");
daysToXmas(date); // 0
const date1 = new Date("Dec 26, 2021");
daysToXmas(date1); // -1
const date2 = new Date("Dec 31, 2021");
daysToXmas(date2); // -6
const date3 = new Date("Jan 1, 2022 00:00:01");
daysToXmas(date3); // -7
const date4 = new Date("Jan 1, 2022 23:59:59");
daysToXmas(date4); // -7
```

Por cierto, la fecha de referencia para saber si es 25 de diciembre es `Dec 25, 2021`.

## Mi solución

```js
export default function daysToXmas(date) {
  const Navidad = new Date("Dec 25, 2021");
  date = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0,
    0
  );
  const resultado = Number((Navidad - date) / 60 / 60 / 24 / 1000);
  return parseInt(resultado);
}
```

# [Día 6 | Rematando los examenes finales](https://adventjs.dev/challenges/06)

> Buffff! Ya huelo las vacaciones pero todavía falta terminar los exámenes finales. ¡Y toca un poco de matemáticas! 😱 ¡Ayúdame!

Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces **pueden haber más de dos valores** que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, **sin importar lo lejos que esté a la derecha**.

Si no se encuentra, se devuelve `null`.

Veamos unos ejemplos:

```js
sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
```

El resultado tiene que ser **un array con dos números**.

Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para **no tener que recorrer las mismas situaciones dos veces** 🤔?

## Mi solución

```js
export default function sumPairs(numbers, result) {
  for (let value = 0; value < numbers.length - 1; value++) {
    for (let element = value + 1; element < numbers.length; element++) {
      if (numbers[value] + numbers[element] == result)
        return [numbers[value], numbers[element]];
    }
  }

  return null;
}
```

# [Día 7 | Buscando en el almacén...](https://adventjs.dev/challenges/07)

> Tenemos un amigo que trabaja en una tienda y no es capaz de encontrar en el almacén los productos que tiene... ¿Le ayudamos?

Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función `contains` que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

```js
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

contains(almacen, "camiseta"); // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

contains(otroAlmacen, "gameboy"); // false
```

Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones. **Lo importante es buscar que el producto está en los almacenes.**

## Mi solución

```js
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
```

# [Día 8 | La locura de las criptomonedas](https://adventjs.dev/challenges/08)

> Hemos invertido en criptomonedas... Y el otro día se pusieron todos los valores en rojo. En lugar de asustarnos, vamos a ver si podemos optimizar nuevas inversiones.

Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta **que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.**

Por ejemplo:

```js
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)
```

**Si ese día no se puede sacar ningún beneficio**, tenemos que devolver `-1` para evitar que hagamos una locura:

```js
const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
```

## Mi solución

```js
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

  if (precioMenor < precioMayor) {
    ganancia = precioMayor - precioMenor;
  }

  return ganancia;
}
```

# [Día 9 | Agrupando cosas automáticamente](https://adventjs.dev/challenges/09)

> Tenemos un montón de cajas en la fábrica de regalos... y como no automaticemos de alguna forma ordenar este desastre... ¡Igual nos quedamos sin Navidad!

En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a **Mark Zucktheelf 🧝** se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.

Nos trae un montón de **ejemplos**:

```js
groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{ age: 23 }, { age: 24 }], "age"); // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy([1397639141184, 1363223700000], (timestamp) =>
  new Date(timestamp).getFullYear()
);
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy(
  [
    { title: "JavaScript: The Good Parts", rating: 8 },
    { title: "Aprendiendo Git", rating: 10 },
    { title: "Clean Code", rating: 9 },
  ],
  "rating"
);
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
```

Como ves, la función `groupBy` recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

La dificultad del reto está más en **comprender** la función que en la **implementación**. ¡Suerte!.

## Mi solución

```js
export default function groupBy(collection, it) {
  const lista = {};

  if (typeof it == "function") {
    collection.map((value) => {
      lista[it(value)]
        ? lista[it(value)].push(value)
        : (lista[it(value)] = [value]);
    });
  } else
    collection.map((value) => {
      lista[value[it]]
        ? lista[value[it]].push(value)
        : (lista[value[it]] = [value]);
    });

  return lista;
}
```

# [Día 10 | La máquina de cambio](https://adventjs.dev/challenges/10)

> De cara a las ventas navideñas, vamos a automatizar el cambio de las monedas para que no se tenga que hacer manualmente. ¡Ganaremos tiempo! Pero primero, hay que programarlo.

Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

```js
coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos
```

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la **combinación de monedas mínimas** que debemos usar para conseguirlo.

```js
getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```

La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que **debes usar siempre el menor número de monedas posible**. ¡Suerte 👩‍💻👨‍💻!.

## Mi solución

```js
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
```

# [Día 11 | ¿Vale la pena la tarjeta fidelidad del cine?](https://adventjs.dev/challenges/11)

> ¡Este mes hay un montón de peliculones en el cine! Viendo que voy a tener que pasar bastante por taquilla también en 2022, estoy mirando de optimizar mis gastos. ¡Ayúdame!

Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:

• Entrada de un sólo uso: Cuesta 12$ por cada película.

• Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas **pagas sólo el 75% del precio del ticket**. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.
Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:

```js
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
```

Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

```js
shouldBuyFidelity(1); // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad
```

La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la tarjeta fidelidad. 😜

## Mi solución

```js
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
```

# [Día 12 | La ruta perfecta para dejar los regalos](https://adventjs.dev/challenges/12)

> En el taller de Santa ya están preparándolo todo para poder hacer la ruta perfecta para dejar los regalos. El problema es que hay unos obstáculos en el camino que debemos sortear...

En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

**La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.**

El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la **lista de posiciones de los obstáculos desordenada...** 😅 aunque al menos nunca **la posición 0 puede tener un obstáculo**.

Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

```js
const obstacles = [5, 3, 6, 7, 9];
getMinJump(obstacles); // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles = [2, 4, 6, 8, 10];
getMinJump(obstacles); // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/
```

La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez y que buscamos el salto mínimo que nos serviría para sortear todos los obstaculos.

## Mi solución

```js
export default function getMinJump(obstacles) {
  let pasa = false;

  for (let saltos = 1; saltos <= Math.max(...obstacles); saltos++) {
    pasa = true;

    for (let pasos = 0; pasos <= Math.max(...obstacles); pasos += saltos)
      if (obstacles.includes(pasos)) pasa = false;

    if (pasa) return saltos;
  }
}
```

# [Día 13 | Envuelve regalos con asteriscos](https://adventjs.dev/challenges/13)

> Estamos a fuego envolviendo regalos... ¡pero necesitamos automatizar esto antes de que los elfos decidan ponerse en huelga! ¡Salva la Navidad (otra vez)!

¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

- Si el array está vacío, devuelve un array vacío
- Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
- Por suerte, cada posición del array siempre tiene la misma longitud...

```js
wrapGifts(["📷", "⚽️"]);
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"]);
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"]);
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
```

## Mi solución

```js
export default function wrapGifts(gifts) {
  const regalos = [];

  if (!gifts.length) return regalos;

  regalos.push("**".repeat(2 + gifts[0].length / 4));

  gifts.map((value) => {
    if (/\p{Emoji}/u.test(value)) regalos.push("*" + value + "*");
  });

  regalos.push("**".repeat(2 + gifts[0].length / 4));

  return regalos;
}
```

# [Día 14 | En busca del reno perdido](https://adventjs.dev/challenges/14)

> En el pueblo de Santa Claus han ido a pasear a los renos y se les ha escapado uno. ¡Madre mía! Ahora a buscarlo. 😿

¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

**👍 Lo bueno**: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

**👎 Lo malo**: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

```js
missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
```

Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?

## Mi solución

```js
export default function missingReindeer(ids) {
  let esperaValor = 0;

  for (let i = 1; i <= ids.length; i++) esperaValor += i;

  return esperaValor - ids.reduce((a, b) => a + b);
}
```

# [Día 15 | El salto perfecto](https://adventjs.dev/challenges/15)

> Estamos optimizando el trineo para que los saltos que da sean lo más óptimos posible. Un amigo que tiene un Tesla nos ha explicado la mejor forma. ¡A ver si sacamos una función para aseguarnos!
> ¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

Nuestro mecánico de confianza, **Kiko Belfs**, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que **los números suben y bajan de forma correcta**. También nos avisa que sólo pasaremos **arrays de, como mínimo, tres posiciones**.

Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

```js
checkSledJump([1, 2, 3, 2, 1]); // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]); // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]); // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]); // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]); // false: no sube de forma estricta
checkSledJump([1, 2, 3]); // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]); // false: sube y baja y sube... ¡no vale!
```

**Lo importante**: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...

## Mi solución

```js
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
```

> Mas desafios en los proximos días 🛠️
