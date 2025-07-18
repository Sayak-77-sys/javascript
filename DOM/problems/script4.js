// how to get the src of an image using javascript?

let img = document.querySelector("img");
console.log(img.src);

console.log(img.getAttribute("src"));

// how to set the src of an image using javascript?

img.src = "https://picsum.photos/200/300";

img.setAttribute(
  "src",
  "https://plus.unsplash.com/premium_photo-1671410372788-16f3eb25a817?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);
// how to get the alt of an image using javascript?

// Event Bubbling Example
// Create nested elements: outer div > inner div > button
const outerDiv = document.createElement("div");
outerDiv.style.border = "2px solid red";
outerDiv.style.padding = "20px";
outerDiv.style.marginTop = "20px";
outerDiv.textContent = "Outer Div";

const innerDiv = document.createElement("div");
innerDiv.style.border = "2px solid green";
innerDiv.style.padding = "20px";
innerDiv.style.margin = "10px";
innerDiv.textContent = "Inner Div";

const button = document.createElement("button");
button.textContent = "Click Me!";
button.style.margin = "10px";

// Nest the elements
innerDiv.appendChild(button);
outerDiv.appendChild(innerDiv);
document.body.appendChild(outerDiv);

// Add event listeners to each element
document.body.addEventListener("click", function () {
  console.log("Body clicked");
});
outerDiv.addEventListener("click", function () {
  console.log("Outer Div clicked");
});
innerDiv.addEventListener("click", function () {
  console.log("Inner Div clicked");
});
button.addEventListener("click", function (event) {
  console.log("Button clicked");
  // event.stopPropagation(); // Uncomment to stop bubbling here
});
