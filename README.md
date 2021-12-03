# adventJS 2021
> Resolviendo los 25 días de retos con JavaScript de adventjs.dev

[adventJS](https://adventjs.dev/) es un evento de [midu.dev](https://midu.dev), donde por 25 días tendremos que resolver un problema usando JavaScript

En este repositorio subiré como resolví los 25 retos, esperando completarlo antes de acabar 2021 🤠

## Retos
### [Día 1 | Contando ovejas para dormir](https://adventjs.dev/challenges/01)
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color  _rojo_ **y que además** su nombre contenga tanto las letras _n_ Y _a_, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:
```js
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]
```
Al ejecutar el método debería devolver lo siguiente:
```js
const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```
### Mi solución
```js
export default function contarOvejas(ovejas) {
  return ovejas.filter(
    ({ name, color }) =>
      color == "rojo" && name.search("[aA]") != -1 && name.search("[nN]") != -1
  );
}
```
### [Día 2 | Ayuda al elfo a listar los regalos](https://adventjs.dev/challenges/02)
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un **_** delante de la palabra, por ejemplo **_playstation**, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
```js
const carta = 'bici coche balón _playstation bici coche peluche'
```
Al ejecutar el método debería devolver lo siguiente:
```js
const regalos = listGifts(carta)

console.log(regalos)
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
### Mi solución
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
### [Día 3 | El Grinch quiere fastidiar la Navidad](https://adventjs.dev/challenges/03)
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:
```js
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
 ```
Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
### Mi solución
```js
export default function isValid(letter) {
  if (letter.search(/[{}\[\]]/g) != -1) return false;
  if (letter.search(/\(/g) == -1 || letter.search(/\)/g) == -1) return false;
  if(letter.search(/\(/g) - letter.search(/\)/g) == -1) return false;
  if(letter.charAt(letter.search(/\)/i) - 1) == '(')  return false;
  return true;
}
```
> Mas desafios en los proximos dias 🛠️
