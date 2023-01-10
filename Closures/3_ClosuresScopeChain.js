var name1 = "Pratham";
function makeFunc() {
  name2 = "Rahul";
  function displayName(number) {
    console.log(name1, number, name2);
  }
  return displayName;
}
makeFunc()(5);
