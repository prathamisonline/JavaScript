const numbers = [1, 2, 4, 5, 6, 9];
const missarr = [];
const missingValue = (numbers) => {
  const minValue = Math.min(...numbers);
  const maxValue = Math.max(...numbers);
  for (let i = minValue; i <= maxValue; i++) {
    if (numbers.indexOf(i) < 0) {
      missarr.push(i);
    }
  }
  return missarr;
};
console.log(missingValue(numbers));
