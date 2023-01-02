// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API

// CRUD
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com

// GET /posts/1 - single blog post

// console.log(fetch("http://jsonplaceholder.typicode.com/posts"));

fetch("https://jsonplaceholder.typicode.com/photos/1")
  .then((res) => res.json())
  .then((data) => console.log(data))

  .catch((error) => console.error(error));
