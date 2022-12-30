console.log("Start");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("Hi, your task is successful");
    } else {
      reject("Your task is unsuccessful");
    }
  }, 5000);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// console.log(promise);

console.log("stop");
