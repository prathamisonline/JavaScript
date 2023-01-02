// It returns the index of the first occurrence of an element in the array. If an element is not found, the indexOf() method returns -1.

const names = ["tom", "alex", "bob", "john"];

console.log(names.indexOf("alex"));
console.log(names.indexOf("rob"));

// There is another method lastIndexOf() that helps you find the index of the last occurrence of an element in the array. Like indexOf(), lastIndexOf() also returns -1 if the element is not found.
const names2 = ["tom", "alex", "bob", "tom"];

names.lastIndexOf("tom");
console.log(names2.indexOf("tom"));
console.log(names2.lastIndexOf("tom"));
