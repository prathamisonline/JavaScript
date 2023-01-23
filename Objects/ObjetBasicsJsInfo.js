// function createObject(name, age) {
//   return {
//     name: name,
//     age: age,
//     // * to make a short we can user only name and age
//   };
// }

// const newObj = createObject("Pratham", 23);

// console.log(newObj);

// * For..in loop in object

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };
// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// *Check for emptiness
importance: 5;
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// function isEmpty(schedule) {
//   return Object.keys(schedule).length == 0 ? true : false;
// }

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";
// schedule.name = "Pratham";
// console.log(schedule);
// console.log(isEmpty(schedule)); // false

// *Sum object properties
importance: 5;
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(Object.values(salaries).reduce((acc, salary) => acc + salary, 0));

// *Multiply numeric property values by 2
importance: 3;
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] == "number") {
      menu[key] *= 2;
    }
  }
  return menu;
}
console.log(multiplyNumeric(menu));

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
