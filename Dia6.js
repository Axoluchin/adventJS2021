export default function sumPairs(numbers, result) {
  for (let value = 0; value < numbers.length - 1; value++) {
    for (let element = value + 1; element < numbers.length; element++) {
      if (numbers[value] + numbers[element] == result)
        return [numbers[value], numbers[element]];
    }
  }

  return null;
}

console.log(sumPairs([3, 5, 7, 2], 10));
