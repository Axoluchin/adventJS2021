export default function countPackages(carriers, carrierID) {
  let Paquetes;

  const newList = carriers.filter((value) => value[0] == carrierID)[0];
  console.log(newList);
  Paquetes = newList[1];
  newList[2].map(value => Paquetes+= countPackages(carriers,value))

  return Paquetes;
}

const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

console.log(countPackages(carriers, "dapelu")); // 9
