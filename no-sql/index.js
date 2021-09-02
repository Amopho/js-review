// accesing object properties wit a variable
var someObj = {
  propName: "John",
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);

// Check if the object has a given property
var obj = {
  id: "one",
  name: "Who",
};

var checkProp = "name";

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj(obj, checkProp));
