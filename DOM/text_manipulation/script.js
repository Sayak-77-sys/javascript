

let h1=document.querySelector("h1");

h1.textContent="khela hobe";

h1.innerText="khela hobe na";

h1.innerHTML="<i>khela hobe</i>";

let a=document.querySelector("a");

a.href="https://www.google.com";

a.setAttribute("href","https://www.instagram.com");

let img=document.querySelector("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1744168222804-2bed62b24f86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);


let h2=document.createElement("h2");

h2.textContent="khela hobe ki?";

h2.style.color="red";

h2.style.fontSize="20px";

h2.style.fontWeight="bold";

h2.style.textAlign="center";

h2.style.backgroundColor="yellow";

document.body.appendChild(h2);

h1.remove();