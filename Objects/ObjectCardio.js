// *Sum the properties
importance: 5;
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
// function sumSalaries(salaries) {
//   const newSarayArr = Object.values(salaries);
//   let salarySum = 0;
//   for (let salary of newSarayArr) {
//     salarySum += salary;
//   }
//   return salarySum;
// }

// console.log(sumSalaries(salaries));

// //? using reduce method

// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
// }

// *Count properties
importance: 5;
// Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2
