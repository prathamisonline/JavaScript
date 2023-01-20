const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dobuledNumbers = numbers.reduce((acc, number) => {
  acc.push(number * 2);
  return acc;
}, []);

// console.log(dobuledNumbers);

// Implementing filter method with reduce
// const greaterThanThree = numbers.reduce((acc, number) => {
//   if (number > 3) {
//     acc.push(number);
//   }
//   return acc;
// }, []);
// console.log(greaterThanThree);
