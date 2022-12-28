// let number = parseInt(alert("enter Number"));

const fib = (number) => {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 1; i <= number; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
};

fib(10);
