const myName = "Pratham";

const reverseString = (word) => {
  let revereseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    revereseWord += word[i];
  }
  return revereseWord;
};
console.log(reverseString(myName));
