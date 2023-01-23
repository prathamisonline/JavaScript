//* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) => {
//       return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
//     })
//     .join("");
// }
// console.log(camelize("background-color"));

//*Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// let arr = [5, 3, 8, 1];

// function fillteredArray(arr, a, b) {
//   const newArray = arr.filter((item) => item >= a && item <= b);
//   return newArray;
// }

// console.log(fillteredArray(arr, 1, 4));
// console.log(arr);

//*Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// let arr = [5, 3, 8, 1];
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (item < a || item > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// }
// console.log(filterRangeInPlace(arr, 1, 4));

// //* sort in decreasin order
// let arr = [5, 2, 1, -10, 8];
// console.log(
//   arr.sort((a, b) => {
//     return b - a;
//   })
// );

//* unmodified sorted

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// function copySorted(arr) {
//   return arr.slice().sort();
// }
// console.log(sorted);
// console.log(arr);

// var i = 0;
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current, index) => {
//   if (i == 0) {
//     sum = [];
//     i++;
//   }
//   sum.push(current);
//   return sum;
// }, 0);
// console.log(result);

// *
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// const user = [john, pete, mary];

// const userMapped = user.map((item, index) => ({
//   fullName: `${item.name} ${item.surname}`,
//   id: item.id,
// }));

// console.log(userMapped);
// console.log(userMapped[0].fullName);

// * Sort by age

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];
// console.log(arr.sort((a, b) => a.age - b.age));
// console.log(arr[1].name);

// *Shuffle an array
// let arr = [1, 2, 3];

// console.log(arr.sort(() => Math.random() - 0.5));

// *Get average age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];
// function getAverageAge(arr) {
//   const average = arr.reduce((acc, item) => acc + item.age, 0) / arr.length;
//   return average;
// }
// console.log(getAverageAge(arr));

// *Filter unique array members
importance: 4;
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// let arr = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// function unique(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(unique(arr));

// *Create keyed object from array
importance: 4;
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function getUserById(users) {
  return users.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}
console.log(getUserById(users));
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
