// Add an event listener to the button to make the makeStory function to be called every time when someone presses it.

// In the makeStory function, perform the following actions:

// take the values from inputs;
// create a story using them (ex: "Diana visited the beautiful Barcelona.");
// display the story in the tag identified by the story id;
//EXE 1
document.getElementById("story-button").addEventListener("click", makeStory);

function makeStory(){
    var visitedPlases=document.getElementById("places").value;
    var characteristics=document.getElementById("characteristics").value;
    var people=document.getElementById("people").value;
    var story=people.concat(" visited the ",characteristics, " of ",visitedPlases," . ");
    document.getElementById("story").textContent=story;
}