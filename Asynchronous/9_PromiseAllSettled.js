console.log("hi");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Good Morning ${username}`);
    }, 2000);
  });
}
function importantAction2(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Good evening ${username}`);
    }, 2000);
  });
}

function importantAction3(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Good night ${username}`);
    }, 2000);
  });
}

// importantAction("Pratham")
//   .then((res) => {
//     console.log(res);
//     return importantAction2("Pratham");
//   })
//   .then((res) => {
//     console.log(res);
//     return importantAction3("Pratham");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("promise reject");
//   });

Promise.allSettled([
  importantAction("Pratham"),
  importantAction2("Pratham"),
  importantAction3("Pratham"),
]).then((res) => {
  console.log(res);
});

console.log("BY");
