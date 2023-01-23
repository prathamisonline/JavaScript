// for-in loop

// const obj = { one: 1, two: 2 };

// for (const key in obj) {
//   console.log("key", key);
// }

// for (const key in obj) {
//   console.log("value", obj[key]);
// }

// Object.keys(), Object.values(), Object.entries()

// const user = {
//   name: "John",
//   age: 29,
// };

// const user1 = Object.keys(user).includes("age");
// console.log(user1);

// const monthlyExpenses = {
//   food: 400,
//   rent: 1700,
//   insurance: 550,
//   internet: 49,
//   phone: 95,
// };

// const total = Object.values(monthlyExpenses).reduce(
//   (acc, amount) => acc + amount,
//   0
// );
// console.log(total);

const users = {
  2345234: {
    name: "John",
    age: 29,
  },
  8798129: {
    name: "Jane",
    age: 42,
  },
  1092384: {
    name: "Fred",
    age: 17,
  },
};

const usersOver20 = Object.entries(users).reduce((acc, [user, id]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }
  return acc;
});
console.log(usersOver20);
