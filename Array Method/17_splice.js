// The splice() method helps you add, update, and remove elements in an array. This method may be a bit confusing at the beginning, but once you know how to use it properly, you will get it right.

// The main purpose of the splice() method is to delete elements from array. It returns an array of the elements deleted and modifies the original array. But you can add and replace elements using it as well.

// To add an element using the splice() method, we need to pass the position where we want to add, how many elements to delete starting with the position, and the element to add.

const months = ["January", "February", "March", "April"];
months.splice(1, 0, "Pratham");

console.log(months);
months.splice(2, 1, "Rahul");
console.log(months);
