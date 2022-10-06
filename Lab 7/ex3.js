
  var movePixels = 10; // number of pixels
  var delayMs = 50; // number of miliseconds
  var dogTimer = [];
    var dogTimerFaster = null;

   var img = document.getElementsByTagName("img")[0];
 var currentLeft = parseInt(img.style.left);

  var button = document.createElement("button");
  button.textContent="Reset";
  button.setAttribute("id","reset-button")
document.getElementById("buttons").appendChild(button);



  document.getElementById("start-button").addEventListener("click", startDogWalk);
  document.getElementById("speed-button").addEventListener("click", goDogFaster);
  document.getElementById("stop-button").addEventListener("click", dogStop);  
  document.getElementById("reset-button").addEventListener("click", reset);

  var myinfo=document.getElementById("info");
 myinfo.textContent="Speed :";

  // Move the image on screen with 10px
  function dogWalk() {
    currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + movePixels + "px";
    // reset image position to start
    if (currentLeft > window.innerWidth - img.width) {
      img.style.left = "0px";
    }
  }

  // Call dogWalk function every 50 ms
  function startDogWalk() {
    var element =window.setInterval(dogWalk, delayMs);
    dogTimer.push(element) ;
    document.getElementById("start-button").disabled = true;
  


  }
function goDogFaster() {
   var element =window.setInterval(dogWalk, delayMs/2);
dogTimer.push(element) ;
document.getElementById("start-button").disabled = true;
myinfo.textContent="Speed : ".concat(parseInt(currentLeft+movePixels/10/1000),"px/sec");
  }

  function dogStop(){

    for (let i = 0; i < dogTimer.length; i++) {
  window.clearInterval(dogTimer[i]);



  img.style.left = currentLeft;
  document.getElementById("start-button").disabled = false;


 }}

 function clicked(id){
  return document.getElementById(id).clicked == true
 }


 function reset(){
  window.clearInterval(dogTimer);
    window.clearInterval(dogTimerFaster);
  dogTimer = window.setInterval(dogWalk, delayMs);
 }


 var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

function session(){
     alert("Session expired! ");

}
    
     function resetTimer() {
        clearTimeout(time);
        time = setTimeout(session, 5000)
        // 1000 milliseconds = 1 second
    }

};
window.onload = function() {
  inactivityTime();
};
