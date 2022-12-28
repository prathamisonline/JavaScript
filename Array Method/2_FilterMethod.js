const employees = [
  { name: "David Carlson", age: 30 },
  { name: "John Cena", age: 34 },
  { name: "Mike Sheridan", age: 25 },
  { name: "John Carte", age: 50 },
];
console.log(employees.filter((user) => user.name.indexOf("John") > -1));

console.log("2nd");
console.log(employees.filter((user) => user.age < 30));

const numbers = [24, 33, 15, 13, 16, 40];

console.log(`Even Numbers are: ${numbers.filter((num) => num % 2 == 0)}`);

let names = ["Ram", "shyam", "Pratham", "Rahul", "Tapan", "Ramesh", "Ajay"];

console.log(
  names.filter((name) => {
    if (name == "Rahul") {
      return name;
    }
  })
);
