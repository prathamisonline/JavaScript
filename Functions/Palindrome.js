const name = "ram";

const checkPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      console.log("Not a palindrome");
    }
  }
  return console.log("its palindrome");
};
checkPalindrome(name);
