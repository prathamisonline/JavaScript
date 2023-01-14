let names = ["Ram", "shyam", "Pratham", "Rahul", "Tapan", "Ramesh", "Ajay"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// function ReverseArray(arr) {
//   var newArray = [];
//   for (var i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   console.log(newArray);
// }

function getReverse(arr) {
  let newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  console.log(newArray);
}
getReverse(numbers);
// ReverseArray(names);
// ReverseArray(numbers);
