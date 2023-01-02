const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject("done"), 1000);
});

promise
  .then((value) => console.log(value))
  .catch(() => console.log("Faluire"))
  .finally(() => console.log("Done"));
