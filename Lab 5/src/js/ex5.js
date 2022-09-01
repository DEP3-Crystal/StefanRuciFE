Array.prototype.myMap = function(callbackFunction) {
  const array = this;
  let newArray = [];

array.forEach(element => {
    newArray.push(callbackFunction(element));
});
  return newArray;
}

function multiplicator(element) {
    return 2 * element;
}
console.log("ex1 : output " + [1,2,3].myMap(multiplicator));