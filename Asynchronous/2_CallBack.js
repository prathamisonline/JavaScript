console.log("hi");
function importantAction(username, cb) {
  setTimeout(() => {
    cb(`Good Morning ${username}`);
  }, 2000);
}
const message = importantAction("Pratham", function (message) {
  console.log(message);
});
// console.log(message);
console.log("Stop");
