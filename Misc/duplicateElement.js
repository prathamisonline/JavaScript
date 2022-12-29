const numbers = [1, 2, 8, 2, 9, 9];
console.log(numbers.filter((item, index) => numbers.indexOf(item) !== index));
