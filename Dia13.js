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

console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
  [ '****',
    '*📷*',
    '*⚽️*',
    '****'
  ]
  */
console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
  [ '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
  ]
  */

console.log(wrapGifts([]));
