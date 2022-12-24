function randomFunction() {
  obj = { name: "Pratham", age: "22", location: "pune" };
  return function () {
    console.log(`${obj.name} who lives in ${obj.location} is awesome`);
  };
}
let closuresIntialization = randomFunction();
closuresIntialization();

// The function randomFunc() gets executed and returns a function when we assign it to a variable:

// var initialiseClosure = randomFunc();
// The returned function is then executed when we invoke initialiseClosure:

// initialiseClosure();
// The line of code above outputs “Vivian is awesome” and this is possible because of closure.

// console.log(obj1.name + " is "+ "awesome");
// When the function randomFunc() runs, it seems that the returning function is using the variable obj1 inside it:

// Therefore randomFunc(), instead of destroying the value of obj1 after execution, saves the value in the memory for further reference. This is the reason why the returning function is able to use the variable declared in the outer scope even after the function is already executed.

// This ability of a function to store a variable for further reference even after it is executed is called Closure

function handleLikePost(step) {
  let likeCount = 0;
  return function addLike() {
    likeCount += step;
    return likeCount;
  };
  //   addLike();
  console.log("like count:", likeCount);
}

const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());
