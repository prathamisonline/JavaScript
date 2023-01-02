const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 1000);
});
promise
  .then((value) => console.log(value))
  .catch(() => console.log("Success"))
  .finally(() => console.log("done"));
