const arrr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "s",
  "t",
  "e",
  "a",
  "b",
  "c",
  "e",
  "f",
  "g",
  "g",
  "h",
  "h",
  "i",
  "r",
  "a",
  "v",
  "b",
  "c",
];

const removeDuplicate = (arr) => {
  return arr.filter((item, pos) => {
    return arr.indexOf(item) == pos;
  });
};

console.log(removeDuplicate(arrr));
