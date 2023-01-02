// This is old way of making promise

// function getBlogPost() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("blog post"), 1000);
//   });

//   promise
//     .then((value) => console.log(value))
//     .finally(() => console.log("done"));
// }

// getBlogPost();

// This is by using async await

// async function getBlogPost() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("blog post"), 1000);
//   });

//   const result = await promise;
//   // .then((value) => console.log(value))
//   // .finally(() => console.log("done"));
//   console.log(result);
//   console.log("done");
// }

// getBlogPost();

// This is modern way of calling a fetch

const blogPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
};

blogPost();
