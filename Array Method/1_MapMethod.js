const months = ["January", "February", "March", "April"];

console.log(months.map((item) => item.toUpperCase()));
console.log(months);
const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
    age: 30,
    location: "US",
  },
  {
    first_name: "Tim",
    last_name: "Lee",
    age: 45,
    location: "India",
  },
  {
    first_name: "John",
    last_name: "Carte",
    age: 25,
    location: "England",
  },
];

console.log(users.map((user) => user.first_name + " " + user.last_name));

// 3rd

console.log(users.map((user) => user.first_name));
console.log(users.map((user) => user.last_name));

// We can even use map to generate an array with dynamic content as shown below:

console.log(
  users.map((user) => `${user.first_name} lives in ${user.location}`)
);

// Advantages of using the map method
// It helps quickly generate a new array without changing the original array
// It helps generate an array with dynamic content based on each element
// It allows us to quickly extract any element of the array
// It generates an array with the exact same length as the original array
