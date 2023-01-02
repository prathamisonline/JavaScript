// This method applies a function against an accumulator and each element in the array to reduce it to a single value.

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.reduce((acc, num) => acc + num, 0));

// subtract all numbers from first number
// since 1st element is called as accumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100

const numbers2 = [1800, 50, 300, 20, 100];

console.log(
  numbers2.reduce((accumulator, currentValue) => accumulator - currentValue)
);

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

// function that subtracts all array elements from given number
// 15000 - 1800 - 2000 - 3000 - 5000 - 500
console.log(
  expenses.reduce(
    (accumulator, currentValue) => accumulator - currentValue,
    salary
  )
);
