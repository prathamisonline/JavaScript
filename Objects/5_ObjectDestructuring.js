const user = {
  firstName: "Pratham",
  lastName: "srivastava",
  age: 23,
  location: "Pune",
  details: {
    title: "Programmer",
  },
};

// function displayUser() {
//   console.log(` My name is ${user.firstName} ${user.lastName}`);
// }
// displayUser();

/*
// using object destructuring

const { firstName, lastName } = user;
function displayUser() {
  console.log(`my name is ${firstName} ${lastName}`);
}

displayUser();
*/

/*
const {
  firstName,
  lastName,
  details: { title },
} = user;

function displayUser() {
  console.log(`my name is ${firstName} ${lastName} and I am a ${titles}`);
}

displayUser();
*/

function displayUser({ firstName, details: { title } }) {
  console.log(`${firstName} is a ${title}`);
}
displayUser(user);
