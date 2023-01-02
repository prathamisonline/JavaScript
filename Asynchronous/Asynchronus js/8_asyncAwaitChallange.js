// Challenge:
// Rewrite the GET API call from the previous challenge using async-await

// Challenge:
// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       return response.json()
//   })
//   .then(person => console.log(`${person.name} works for ${person.company.name}`))
//   .catch(err => console.error(err))

const getApiCalls = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/user/3");
    const person = await response.json();
    console.log(person);
    console.log(`${person.name} works for ${person.company.name} `);

    if (!response.ok) {
      throw new Error(response.status);
    }
  } catch (error) {
    alert("there is any error in you code please fix it");
    console.log(err);
  }
};

getApiCalls();
