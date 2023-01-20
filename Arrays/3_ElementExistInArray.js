// const temperature = [45, 28, 31, 50];

// console.log(temperature.indexOf(31));
// console.log(temperature.includes(44));

const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

const result = temperatures.some((temp) => temp.isRecordTemp == true);
console.log(result);

const newResult = temperatures.every((temp) => temp.isRecordTemp);
console.log(newResult);
