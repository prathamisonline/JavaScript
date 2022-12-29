const palindrome = (str) => {
  const isPalindrome = str.split("").reverse().join("");
  if (isPalindrome == str) {
    console.log("its palindrome");
  } else {
    console.log("Its not palindromes");
  }
};

palindrome("abba");
palindrome("abc");
