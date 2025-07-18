// add a title attribute to div dyanamically

let div=document.querySelector("div");

div.setAttribute("title", "hello world");


//remove the disabled attribute from a button


let button=document.querySelector("button");

button.removeAttribute("disabled");


//add a class to a div

let div2=document.querySelector("div");

div2.classList.add("new-class");



// add a child element to a div

let ul=document.querySelector("ul");

let li=document.createElement("li");

li.textContent="orange";

ul.appendChild(li);



let img=document.createElement("img");

img.setAttribute(
  "src",
  "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
);

document.querySelector("div").prepend(img);


img.classList.add("placeholder")

img.appendChild();