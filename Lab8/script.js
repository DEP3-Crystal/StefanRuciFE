
var container=document.getElementById("dogs");
var ul=document.createElement("ul");
var label=document.createElement("label");


fetch("http://localhost:3000/dogs")
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            label.textContent="Loading ...";
document.body.appendChild(label);
       display(data);
        });
    }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });

    function display(data){
data.forEach(element => {
    var li=document.createElement("li");
    var img=document.createElement("IMG");
    li.textContent=element.name;
    img.src=element.img;
    ul.append(li,img);
});
    }
    container.appendChild(ul);