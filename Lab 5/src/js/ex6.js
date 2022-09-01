// 


Array.prototype.myFilter = function(callbackFunction) {
  const array = this;
  let newArray = [];
  array.forEach(element => {
    if(callbackFunction(element)){
         newArray.push(element);
    }
   
});
  return newArray;
}

function biggerThanFive(element) {
    return element > 4;
}

console.log([1,2,3,4,5,6,7,8,9].filter(biggerThanFive)); // [5,6,7,8,9]
console.log([1,2,3,4,5,6,7,8,9].myFilter(biggerThanFive)); // [5,6,7,8,9]