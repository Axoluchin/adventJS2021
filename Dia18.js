export default function fixFiles(files) {
  const listaNueva = [];
  let repetido = false;
  let num = 1;
  let tempName;

  files.map((value) => {
    num = 1
    if (listaNueva == "") {
      listaNueva.push(value);
    } else {
      tempName = value;
      do {
        if (listaNueva.find((element) => element == tempName)) {
          repetido = true;
          tempName = value + "(" + num++ + ")";
        } else {
          repetido = false;
          listaNueva.push(tempName);
        }
      } while (repetido);
    }
  });

  return listaNueva;
}

const files = ["photo", "postcard", "photo", "photo", "video"];
console.log(fixFiles(files));
// ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ["file", "file", "file", "game", "game"];
console.log(fixFiles(files2));
// ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
console.log(fixFiles(files3));
// ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
