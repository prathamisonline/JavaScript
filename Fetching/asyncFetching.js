const baseEndPoint = "https://api.github.com";
const usersEndPoint = `${baseEndPoint}/users`;
const userEl = document.querySelector(".user");

// const handleError = function (err) {
//     console.log("ohh no");
//     console.log(err);
//   };
// async function displayuser(username) {
//   userEl.textContent = "Loading.....";
//   const wesPromise = fetch(endpoint);
//   wesPromise
//     .then((Response) => {
//       Response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(data.blog);
//       console.log(data.name);
//       console.log(data.location);
//       userEl.textContent = `${data.name} - ${data.blog}`;
//     })
//     .catch(handleError);
// }

// Now change it to async await fetching
const handleError = function (err) {
  console.log("ohh no");
  console.log(err);
  userEl.textContent = `something went wrong: ${err}`;
};

async function displayuser(username) {
  userEl.textContent = "Loading.....";
  const response = await fetch(`${usersEndPoint}/${username}`);
  const data = await response.json();

  console.log(data);
  console.log(data.blog);
  console.log(data.name);
  console.log(data.location);
  userEl.textContent = `${data.name} - ${data.blog}`;
}

displayuser("stolinski").catch(handleError);
