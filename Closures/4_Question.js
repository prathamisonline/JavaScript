// write a function that would allow you to do this

// var addSix = createBase(6);
// addSix(10); //returns 16
// addSix(21); //returns 27

// var num = 6;
function createBase(num) {
  function makeFunc(num2) {
    console.log(num2 + num);
  }
  return makeFunc;
}

let addSix = createBase(6);

addSix(10);
addSix(21);
