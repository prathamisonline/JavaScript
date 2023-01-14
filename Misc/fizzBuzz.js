function fizzBuzz() {
  for (let i = 1; i <= 5; i++) {
    if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log("FizzBuzz");
    }
  }
}
fizzBuzz();
