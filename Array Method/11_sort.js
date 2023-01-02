// This method is used to arrange/sort array’s elements either in ascending or descending order.

const numbers = [
  1, 2, 3, 4, 3, 7, 9, 3, 2, 4, 66, 7, 89, 664, 33, 56, 43, 24, 79, 75,
];

const accending = numbers.sort((a, b) => a - b);
const descending = numbers.sort((a, b) => b - a);

console.log(accending);
console.log(descending);
