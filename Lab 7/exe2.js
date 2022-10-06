// Create a JavaScript file named script.js and link it to the HTML file using <script> tag at the end of it.

// Add events to the buttons to make the calculation functions to be called every time they are pressed.

// Create the functions that return the correct results for all the above cases.

// Display the results of the calculations in the tag identified by solution id.

// Use the keypress event on one of the inputs so that the user doesn't have to click on the button.

document.getElementById("square-button").addEventListener("click", getsqare);
document.getElementById("square-input").addEventListener("mouseover", getsqare);

function getsqare(){

    var input=document.getElementById("square-input").value;
    if(input!=0){
        document.getElementById("solution").textContent="Square = ".concat(input**2);

    }
   }

   
   document.getElementById("half-button").addEventListener("click", gethalf);

function gethalf(){
    var input=document.getElementById("half-input").value;
document.getElementById("solution").textContent="Half = ".concat(input/2);
   }








document.getElementById("percent-button").addEventListener("click", getpercent);

function getpercent(){
    var percent=document.getElementById("percent1-input").value;
        var number=document.getElementById("percent2-input").value;

document.getElementById("solution").textContent="Result = ".concat((percent*number)/100);
   }




document.getElementById("area-button").addEventListener("click", getArea);


function getArea(){
    var input=document.getElementById("area-input").value;
document.getElementById("solution").textContent="Area = ".concat(2*3.14*input);
   }




