const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon",
];

let [first, second] = finalMenuItems;
console.log(first, second);
console.log({ first }, { second });

// Swaping elements

[second, first] = [first, second];
console.log(first, second);
console.log({ first }, { second });

const [winner, ...losers] = finalMenuItems;
console.log({ winner, losers });
