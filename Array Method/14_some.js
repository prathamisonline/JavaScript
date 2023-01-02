// This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.some((num) => num > 4));
console.log(numbers.some((num) => num < 0));
