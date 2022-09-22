let movies = [{
  "title": "The Shawshank Redemption",
  "duration": "89",
  "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  "ratings": [],
  "whatched": true,
  "imgMovieURL": "https://assets.mycast.io/posters/the-shawshank-redemption-1989-fan-casting-poster-77082-large.jpg?1610507902"

},
{
  "title": "The Godfather",
  "duration": "90",
  "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
  "ratings": [],
  "whatched": false,
  "imgMovieURL": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"

},
{
  "title": "The Dark Knight",
  "duration": "198",
  "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  "ratings": [],
  "whatched": false,
  "imgMovieURL": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FVWDEHeiix0hu3z2r_Ih1dVIIDVF3sTo_UzH8iIkLOo8nVFh-ASTkWDcQb_8FnKxemQ&usqp=CAU"
},
{
  "title": "Pulp Fiction",
  "duration": "158",
  "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
  "ratings": [],
  "whatched": true,
  "imgMovieURL": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg "
},
{
  "title": "Schindler's List",
  "duration": "120",
  "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
  "ratings": [],
  "whatched": false,
  "imgMovieURL": "https://i.ytimg.com/vi/mxphAlJID9U/maxresdefault.jpg "
}];


var list = document.createElement("ul");

movies.forEach(element => {
//ex 6.3
  //   var p = document.createElement("p");
  //   document.body.appendChild(p).textContent=element.title;
//ex 6.4

  let movieTitle = document.createElement("li");
  var movieInfo = document.createElement("ul");
  let durationINfo = document.createElement("li");
  let actorsInfo = document.createElement("li");
  let whatchedInfo = document.createElement("li");
  let imgMovie = document.createElement("li");
  var image = document.createElement("IMG");
  image.setAttribute("src", element.imgMovieURL);
  image.setAttribute("width", "400");
  image.setAttribute("height", "500");
  // imgMovie.appendChild(image);
  movieTitle.setAttribute("style","display:block")

  let br = document.createElement("br");



  movieTitle.innerHTML = "Movie tittle : ".concat(element.title);
  durationINfo.innerHTML = "Duration Info : ".concat(element.duration);
  actorsInfo.innerHTML = "Actor List : ".concat(element.actors);
  whatchedInfo.innerHTML = "whatched :".concat(element.whatched);

  movieInfo.append(durationINfo, actorsInfo, whatchedInfo);
  movieTitle.appendChild(movieInfo);
  list.append(image, movieTitle,br);

  if (element.whatched) {
    movieTitle.setAttribute("style", "color:green")
  }
  else {
    movieTitle.setAttribute("style", "color:red")

  }
});

document.body.appendChild(list);
document.body.setAttribute("style", "font-size:30")
list.setAttribute("width", "500px");


//   movies.forEach(element => {
//     document.body.innerHTML= "<ul class=\"muvie\"></ul>";

//      addLi(element.title);
//     addLi(element.duration);
//      addLi(element.actors);
//      addLi(element.whatched);



//   });

function addLi(content) {
  console.log(content);
  if (isNaN(content)) {
    var ul = document.getElementById("muvie");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(content));
    ul.appendChild(li);
  }
}
function function1() {
  var ul = document.getElementById("muvie");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Element 4"));
}
