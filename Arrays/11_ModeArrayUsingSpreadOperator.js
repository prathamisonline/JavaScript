const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdea = [...breakfastMenuIdeas, "idli", "dosa", ...dinnerMenuIdeas];
console.log(allMenuIdea);

const idliIndex = allMenuIdea.findIndex((idea) => idea === "idli");
console.log(idliIndex);

const finalMenu = [
  ...allMenuIdea.slice(0, idliIndex),
  "salad",
  "poha",
  ...allMenuIdea.slice(idliIndex + 1),
];

// Final menu without meatloaf

// const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

// const finalMenuIdeas = [
//   ...allMenuIdeas.slice(0, meatloafIndex),
//   ...allMenuIdeas.slice(meatloafIndex + 1)
// ]

console.log(finalMenu);
