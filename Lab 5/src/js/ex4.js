// Input

console.log("ex4");


const blackFridayCart = {
  phone: "350",
  console: "250",
  tv: "450",
  headPhones: "10.60",
  watch: "20.34",
  bag: "22.36"
};

// Output

function getCartValue(blackFridayCart){
    sum=0;
    for (const [key, value] of Object.entries(blackFridayCart)) {
 sum+=Number.parseFloat(value);
}
return sum;
};
   console.log(getCartValue(blackFridayCart) )    ;
