document.body.style.fontFamily = "Arial, sans-serif";
var items = document.getElementsByTagName("li");
for(var i=0;i<items.length;++i) {
    items[i].classList.add("list-item");
}
document.getElementById("nickname").textContent="Stefan";
document.getElementById("favorites").textContent="Hiking,swiming";
document.getElementById("hometown").textContent="Albania,Durres";

  var image = document.createElement("IMG");
  image.setAttribute("src", "https://i.guim.co.uk/img/media/e994bb7ab8b900b70a4ac07026f85ba6ac06e25e/0_248_7360_4415/master/7360.jpg?width=1200&quality=85&auto=format&fit=max&s=775e8347a5a62a6d5bef19bd670bc3ba");
  image.setAttribute("width", "600");
  image.setAttribute("height", "400");
  image.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(image);



