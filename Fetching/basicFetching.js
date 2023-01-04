// Basic data fateching from a api with old type of feteching
const endpoint = "https://api.github.com/users/wesbos";
const userEl = document.querySelector(".user");

userEl.textContent = "Loading....";
const wesPromise = fetch(endpoint);
console.log(wesPromise);

const handleError = function () {
  console.log("Oh no");
  console.log(err);
};
wesPromise
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.blog);
    console.log(data.name);
    console.log(data.location);
    userEl.textContent = `${data.name}-${data.blog}`;
  })
  .catch(handleError);
