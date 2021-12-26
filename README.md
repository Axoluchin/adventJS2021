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
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
```
**Si ese día no se puede sacar ningún beneficio**, tenemos que devolver ```-1``` para evitar que hagamos una locura:
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

  if(precioMenor < precioMayor){
    ganancia = precioMayor-precioMenor
  }

  return ganancia;
}
```

> Mas desafios en los proximos días 🛠️
