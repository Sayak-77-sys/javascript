//let abcd=document.querySelector("#abcd");


/*
window.addEventListener("mousemove", function (event) {
  abcd.style.top= event.clientY + "px";
  abcd.style.left = event.clientX + "px";
  abcd.textContent = "X: " + event.clientX + ", Y: " + event.clientY;
});*/


//jispe event aayega agar uspe listener nahi hua to hamara event uske parent par listener dhundega aur aisa karte karte karte body tak pahunch jaayega
//agar body par bhi nahi mila to event ko ignore kar diya jaayega
//yeh event propagation kehlaata hai

//event bubbling 
// Let's demonstrate event bubbling using the #a, #b, and #c divs inside #abcd.
// We'll add click event listeners to each div and log which div was clicked and the event's target/currentTarget.

document.querySelector("#a").addEventListener("click", function(e) {
  console.log("Clicked on #a");
  console.log("event.target:", e.target.id, "event.currentTarget:", e.currentTarget.id);
});

document.querySelector("#b").addEventListener("click", function(e) {
  console.log("Clicked on #b");
  console.log("event.target:", e.target.id, "event.currentTarget:", e.currentTarget.id);
});

document.querySelector("#c").addEventListener("click", function(e) {
  console.log("Clicked on #c");
  console.log("event.target:", e.target.id, "event.currentTarget:", e.currentTarget.id);
});

// Try clicking on the innermost (#c), middle (#b), and outer (#a) divs.
// Notice how clicking #c will trigger all three listeners due to event bubbling.


// Demonstrate capture phase vs bubbling phase

// Helper function to log with phase info
function logPhase(phase, divId, e) {
  console.log(
    `[${phase}] Listener on #${divId} | event.target: ${e.target.id}, event.currentTarget: ${e.currentTarget.id}`
  );
}

// Add listeners for both capture and bubble phases to #a, #b, #c
["a", "b", "c"].forEach(function (id) {
  // Capture phase listener (third argument true)
  document.getElementById(id).addEventListener(
    "click",
    function (e) {
      logPhase("CAPTURE", id, e);
    },
    true // useCapture
  );

  // Bubbling phase listener (third argument false or omitted)
  document.getElementById(id).addEventListener(
    "click",
    function (e) {
      logPhase("BUBBLE", id, e);
    }
    // default is bubbling phase
  );
});

/*
Instructions:
- Open the console.
- Click on the innermost (#c), middle (#b), and outer (#a) divs.
- Observe the order of logs:
  - Capture phase listeners fire from outermost (#a) to innermost (#c).
  - Bubbling phase listeners fire from innermost (#c) to outermost (#a).
- event.target is always the element you actually clicked.
- event.currentTarget is the element whose listener is running.
*/

