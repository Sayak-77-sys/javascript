//DOM - Document Object Model
// body 

//dom manipulation
//html se element select karna
//text change karna
//html badalna
//css badalna
//attribute change karna
//event listener add karna
// Get the first element with the id "abcd"
let abcd = document.getElementById("abcd");
// Log the element to the console (shows its properties and methods)
console.dir(abcd);

// Get the first element in the document that matches the CSS selector "#abcd" (id abcd)
let abcdQuery = document.querySelector("#abcd");
// Log the element to the console
console.dir(abcdQuery);

// Get the first element in the document that matches the CSS selector ".abcd" (class abcd)
// This will return null if no element has class "abcd"
let abcdClass = document.querySelector(".abcd");
console.dir(abcdClass);

// Get the first <h1> element in the document
let h1Element = document.querySelector("h1");
console.dir(h1Element);

// Get the first <h1> element with id "abcd"
let h1Abcd = document.querySelector("h1#abcd");
console.dir(h1Abcd);

/*
  Explanation:
  - getElementById("abcd") returns the first element with the id "abcd". IDs should be unique in HTML.
  - querySelector("#abcd") returns the first element matching the CSS selector "#abcd" (id abcd).
  - querySelector(".abcd") returns the first element matching the CSS selector ".abcd" (class abcd).
  - querySelector("h1") returns the first <h1> element.
  - querySelector("h1#abcd") returns the first <h1> element with id "abcd".
  - If no element matches, querySelector returns null.
  - console.dir() is used to display the element's properties in the console for inspection.
*/
