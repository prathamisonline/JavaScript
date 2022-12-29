// Synchronous code
// it excute code line by line
console.log("hi");
console.log("hello");
console.log("how are you");

// Javascript runs synchronous code first then asynchronous code

// Asynchronous code

console.log("hello");
setTimeout(() => {
  console.log("pratham");
}, 5000);
console.log("srivastava");
