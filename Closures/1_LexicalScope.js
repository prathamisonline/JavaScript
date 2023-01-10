// bahar ka variable fn ke under use kar sakte hai but not opposite

var name2 = "Tapan";
function local() {
  var name = "Pratham";
  console.log(name);
}

console.log(name2);
local();

function init() {
  var name = "Pratham";
  function printName() {
    console.log(name);
  }
  printName();
}

init();
