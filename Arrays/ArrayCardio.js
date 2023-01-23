// Data
const users = [
  {
    firstName: "Mark",
    lastName: "Chalker",
    gender: "Male",
    age: 31,
    nationality: "India",
    userId: 1,
  },
  {
    firstName: "Konstantine",
    lastName: "Rings",
    gender: "Male",
    age: 88,
    nationality: "China",
    userId: 2,
  },
  {
    firstName: "Sharia",
    lastName: "Anyon",
    gender: "Female",
    age: 61,
    nationality: "Canada",
    userId: 3,
  },
  {
    firstName: "Sara",
    lastName: "Bog",
    gender: "Female",
    age: 74,
    nationality: "Cuba",
    userId: 4,
  },
  {
    firstName: "Corabella",
    lastName: "Parslow",
    gender: "Female",
    age: 22,
    nationality: "England",
    userId: 6,
  },
  {
    firstName: "Terri",
    lastName: "Stammers",
    gender: "Male",
    age: 7,
    nationality: "Canada",
    userId: 5,
  },
  {
    firstName: "Bertie",
    lastName: "Ladlow",
    gender: "Male",
    age: 92,
    nationality: "Malaysia",
    userId: 7,
  },
  {
    firstName: "Margaret",
    lastName: "Baptist",
    gender: "Female",
    age: 33,
    nationality: "Argentina",
    userId: 8,
  },
  {
    firstName: "Cob",
    lastName: "Beach",
    gender: "Male",
    age: 53,
    nationality: "South Korea",
    userId: 9,
  },
  {
    firstName: "Nerti",
    lastName: "Fontin",
    gender: "Male",
    age: 24,
    nationality: "England",
    userId: 10,
  },
];

// -------------------RETURNS NEW ARRAY------------------
// --------------------(Map & Filter)--------------------

// MAP
// 1). List of first names.
// 2). Add a new property (currentlyOnline(boolean)) to each array element.

// console.log(users.map((user) => user.firstName));
// users.map((user) => (user.currentlyOnline = true));
// console.log(users);

// FILTER
// 1). Females only.
// 2). Only show users between age 30 and 70.

// console.log(users.filter((user) => user.gender == "Female"));

// console.log(users.filter((user) => user.age >= 30 && user.age <= 70));

// -----------------MUTATE ORIGINAL ARRAY-----------------
// -------------------(ForEach & Sort)--------------------

// FOREACH
// 1). List everyone's age.
// 2). Add everyone's age.
// 3). If user is from Canada, capitalize their nationality.

// users.forEach((user) => {
//   console.log(user.age);
// });

// let total = 0;
// users.forEach((user) => {
//   total += user.age;
// });
// console.log(total);

// SORT
// 1). Sort by age in descending order
// 2). Sort first names alphabetically

// console.log(users.sort((a, b) => b.age - a.age));
// console.log(
//   users.sort((a, b) => {
//     if (a.firstName < b.firstName) {
//       return -1;
//     } else if (a.firstName > b.firstName) {
//       return 1;
//     }
//     return 0;
//   })
// );
// -------------------RETURNS TRUE/FALSE------------------
// ----------------(Includes, Some & Every)---------------

// INCLUDES
// 1). Does the array include Alexia?
// const names = ["Ben", "Alexia", "David", "Catherine"];
// console.log(names.includes("Alexia"));

// SOME
// 1). Is anyone over the age of 90?
// 2). Is there at least one user from Canada?

// console.log(users.some((user) => user.age > 90));
// console.log(users.some((user) => user.nationality == "Canada"));

// EVERY
// 1). Is everyone over the age of 10?
// 2). Are all users Canadian?

// console.log(users.every((user) => user.age > 10));
// console.log(users.every((user) => user.nationality == "Canada"));

// -------------------SOMETHING SPECIAL------------------
// --------------------(Reduce & Find)-------------------

// REDUCE
// 1). Combined age of all users.

// const totalAge = users.reduce((acc, user) => {
//   return acc + user.age;
// }, 0);
// console.log(totalAge);

// 2). Get total number of users by nationality

// const getTotalUser = users.reduce((acc, user) => {
//   if (acc[user.nationality]) {
//     acc[user.nationality] = acc[user.nationality] + 1;
//   } else {
//     acc[user.nationality] = 1;
//   }
//   return acc;
// }, []);
// console.log(getTotalUser);

// BONUS
// 3). Get total number of calories, carbs and fat. (Reducing multiple properties)
// const meals = [
//   {name: 'breakfast', calories: 900, carbs: 30, fat: 20},
//   {name: 'lunch', calories: 500, carbs: 20, fat: 15},
//   {name: 'snack', calories: 200, carbs: 10, fat: 0},
//   {name: 'dinner', calories: 300, carbs: 30, fat: 15}
// ];
// Total: calories: 1900, carbs: 90, fat: 50;

// FIND
// 1). The first English user.
// 2). The first user under the age of 30.
