function checkNumber() {
  var num = 1;
  function getNumber() {
    console.log(num);
  }
  num++;
  return getNumber;
}

const number = checkNumber();
number();
