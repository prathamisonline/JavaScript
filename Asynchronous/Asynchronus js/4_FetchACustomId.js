const blogPost = {
  title: "COOl Post",
  body: "HI hello how are you",
  userId: 1,
};

fetch("http://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(blogPost),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
