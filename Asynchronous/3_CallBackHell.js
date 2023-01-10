console.log("hi");

function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Good Morning ${username}`);
  }, 1000);
}

function howAreYou(username, cb) {
  setTimeout(() => {
    cb(`How are you ${username}`);
  }, 1000);
}
function isEverthingAlright(username, cb) {
  setTimeout(() => {
    cb(`Is everything alright ${username}`);
  }, 1000);
}

function howIsYourDay(username, cb) {
  setTimeout(() => {
    cb(`How is you day going ${username}`);
  }, 1000);
}

const message = importantAction("Pratham", function (message) {
  console.log(message);
  howAreYou("Pratham", (usernameuuuu) => {
    console.log(usernameuuuu);
    isEverthingAlright("pratham", (username) => {
      console.log(username);
      howIsYourDay("Pratham", (action) => {
        console.log(action);
      });
    });
  });
});
// console.log(message);
console.log("Stop");
