Array.prototype.myReduce = function(callbackFunction, initialVal) {
  const array = this;
  let accumulator = (initialVal === undefined) ? 0 : initialVal;

  let newArray = [];
  array.forEach(element => {
    accumulator= callbackFunction(accumulator,element);
});
  return accumulator;
}

let reducer = (accumulator, currentValue) => accumulator + currentValue;

 // 10
 // 10
console.log([1,2,3,4].reduce(reducer));
console.log([1,2,3,4].myReduce(reducer));