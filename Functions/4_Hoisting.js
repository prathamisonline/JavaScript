hoistedVariable = 4;
console.log(hoistedVariable);

hoistedFunction(); // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction() {
  console.log("hello Pratham");
}

// Hoisting takes place in the local scope as well
function localHoisting() {
  x = 3;
  console.log(x);
  var x;
}
localHoisting();

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:

var z;
console.log(z);
z = 7;
// // Outputs "undefined" since the initialization of "x" is not hoisted

function consoleNum() {
  console.log(num);
  let num = 8;
}
consoleNum();
