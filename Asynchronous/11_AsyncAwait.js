console.log("hi");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Good Morning ${username}`);
    }, 200);
  });
}
function importantAction2(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Good evening ${username}`);
    }, 200);
  });
}

function importantAction3(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Good night ${username}`);
    }, 200);
  });
}

const result = async () => {
  const message1 = await importantAction("Pratham");
  const message2 = await importantAction2("Pratham");
  const message3 = await importantAction3("Pratham");

  console.log({ message1, message2, message3 });
};

result();

console.log("BY");
