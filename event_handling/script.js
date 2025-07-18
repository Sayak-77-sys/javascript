//kuch bhi ho jaaye screen pe aur reaction dena ho to event handle karna chahiye
//we will also discuss the importance of event handling in JavaScript
//event handling is crucial for creating interactive web applications
//it allows us to respond to user actions like clicks, key presses, and other events
//we will explore how to add event listeners to elements
//and how to handle events effectively
//we will also look at event propagation and how events bubble up or capture down the DOM tree
//this will help us understand how to manage events in complex applications
//we will also discuss the concept of event delegation
//which allows us to handle events on multiple elements efficiently
//by attaching a single event listener to a parent element
//this can significantly improve performance in applications with many interactive elements

let h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  h1.style.color = "blue";
});

//select the element first
//then add an event listener to it
//realise what will happen when the event occurs
//

let p = document.querySelector("p");
p.addEventListener("mouseover", function () {
  p.style.fontSize = "20px";
  p.style.color = "red";
});

let button = document.querySelector("button");
button.addEventListener("dblclick", function () {
  alert("Button was double clicked!");
});

p.removeEventListener("mouseover", function () {
  p.style.fontSize = "20px";
  p.style.color = "red";
});

let input = document.querySelector("input");
/*
input.addEventListener("input", function(dets) {
  //console.log("Input value changed to: " + input.value);
  
  console.log(dets.data);

});*/

let sel = document.querySelector("select");
let device = document.querySelector("#device");
if (sel && device) {
  sel.addEventListener("change", function (e) {
    const value = e.target.value;
    console.log("Selected option: " + value);
    device.textContent = "You selected: " + value;
  });
}
