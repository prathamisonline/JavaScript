console.log("hi");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Good Morning ${username}`);
    }, 1000);
  });
}

function howAreYou(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`How are you ${username}`);
    }, 1000);
  });
}
function isEverthingAlright(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Is everything alright ${username}`);
    }, 1000);
  });
}

function howIsYourDay(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`How is you day going ${username}`);
    }, 1000);
  });
}

importantAction("Pratham")
  .then((res) => {
    console.log(res);
    howAreYou("Pratham").then((res) => {
      console.log(res);
      isEverthingAlright("Pratham").then((res) => {
        console.log(res);
        howIsYourDay("Pratham").then((res) => {
          console.log(res);
        });
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Stop");
