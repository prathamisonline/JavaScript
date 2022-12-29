const numbers = [2, 4, 8];
// const sumOfAllElement = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     const sum = sum + arr[i];
//   }
//   return sum;
// };
// console.log(sumOfAllElement(numbers));

console.log(numbers.reduce((acc, cur) => acc + cur));
