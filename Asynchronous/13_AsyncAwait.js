const promise = new Promise((resolve, reject) => {
  setInterval(() => {
    const result = false;
    if (result) {
      resolve("Your promise has been successfully resolved");
    } else {
      reject("Your promise has been failed");
    }
  });
});

async function myFunc() {
  try {
    const newResult = await promise;
    console.log(newResult);
  } catch (error) {
    console.error("Your promise failed");
  }
}

myFunc();
