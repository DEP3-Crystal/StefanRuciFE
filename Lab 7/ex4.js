
  var button = document.createElement("button");
  button.textContent="Reset";
  button.setAttribute("id","reset-button")
document.getElementById("buttons").appendChild(button);

let dog={
    movePixels : 10, // number of pixels
   delayMs :50, // number of miliseconds
   dogTimer : null,
   dogWalk : function () {
var img = document.getElementsByTagName("img")[0];
var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft +this.movePixels + "px";
    // reset image position to start
    if (currentLeft > window.innerWidth - img.width) {
      img.style.left = "0px";
    }
  },
  // Call dogWalk function every 50 ms
  startDogWalk :function () {
    this.dogTimer.bind(this) = window.setInterval(this.dogWalk.bind(this), this.delayMs);
    document.getElementById("start-button").disabled = true;
  },
goDogFaster : function () {
this.dogTimer.bind(this) = window.setInterval(this.dogWalk, this.delayMs/2);
document.getElementById("start-button").disabled = true;
myinfo.textContent="Speed : ".concat(parseInt(this.movePixels/10/1000),"px/sec");
  },

 dogStop :function (){
  window.clearInterval(this.dogTimer);
  document.getElementById("start-button").disabled = false;
  this.dogTimer = window.setInterval(this.dogWalk.bind(this), this.delayMs);
   window.clearInterval(this.dogTimer);
 },
 reset: function(){
  window.clearInterval(this.dogTimer);
  this.dogTimer = window.setInterval(this.dogWalk.bind(this), this.delayMs);
 }
}

 var myinfo=document.getElementById("info");
 myinfo.textContent="Speed :";

  document.getElementById("start-button").addEventListener("click", dog.startDogWalk.bind(this) );
  document.getElementById("speed-button").addEventListener("click",dog.goDogFaster.bind(this));
  document.getElementById("stop-button").addEventListener("click", dog.dogStop.bind(this)); 
  document.getElementById("reset-button").addEventListener("click",dog.reset.bind(this));
 