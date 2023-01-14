const numbers = [1, 2, 8, 2, 9, 9];
console.log(numbers.filter((item, index) => numbers.indexOf(item) !== index));

// console.log(numbers.filter((num) => num > 5));
// console.log(numbers.map((num) => num + 2));
// console.log(numbers.reduce((acc, curr) => acc + curr));
// console.log(numbers.slice(2, 5));
numbers.splice(1, 0, 10);
console.log(numbers);
