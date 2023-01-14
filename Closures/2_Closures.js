// function makeFunc() {
//   var name = "Pratham";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

function checkNumber() {
  var num = 1;
  function getNumber() {
    console.log(num);
  }
  num++;
  return getNumber;
}

const number = checkNumber();
number();
