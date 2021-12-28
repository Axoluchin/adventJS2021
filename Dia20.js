export default function pangram(letter) {
    letter = letter.replace(' ','').toUpperCase().replace(/[ÁÉÍÓÚÄËÏÖÜ]/ig,'a')

    for (let index = 65; index < 91; index++) {
        
        if(letter.search(String.fromCharCode(index)) == -1){
            return false
        }

    }
    if(letter.search('Ñ') == -1){
        return false
    }
  return true;
}

console.log(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vahö")); // true
console.log(
  pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true

console.log(
  pangram(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false
console.log(pangram("De la a a la z, nos faltan letras")); // false


console.log("Extraño pan de col y kiwi se quemó bajo fugaz vaho".search(/[a-z]/ig))

