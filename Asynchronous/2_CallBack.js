// console.log("hi");
// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`Good Morning ${username}`);
//   }, 2000);
// }
// const message = importantAction("Pratham", function (message) {
//   console.log(message);
// });
// // console.log(message);
// console.log("Stop");

console.log("hi");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Good Morning ${username}`);
  }, 2000);
}
function importantAction2(username, cb) {
  setTimeout(() => {
    cb(`Good evening ${username}`);
  }, 2000);
}

function importantAction3(username, cb) {
  setTimeout(() => {
    cb(`Good night ${username}`);
  }, 2000);
}

const message = importantAction("Pratham", function (message) {
  console.log(message);
  importantAction2("Rahul", function (message) {
    console.log(message);
    importantAction3("tapan", function (message) {
      console.log(message);
    });
  });
});

console.log("hello");
