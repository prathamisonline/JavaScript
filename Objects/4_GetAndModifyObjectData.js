const color = "black";
const hexCode = "#a00";

const colors = {
  "yellow color": "#d00",
  blue: "#f00",
  red: "#g00",
  green: "#h00",
  [color]: hexCode,
};

// Bracket notation gives us dynamiclly add and get data
colors[color] = hexCode;

// console.log(colors);
// colors.orange = "#j00";
// console.log(colors);

// colors["yellow color"];
// console.log(colors["yellow color"]);

// // this is how you can get colors from colors object

function getColor(key) {
  return colors[key];
}

console.log(colors["blue"]);

// // For deleting a key value
// delete colors.blue;
// delete colors["green"];
// console.log(colors);
