//add a highlight class to every even class item in a list 

let listItems = document.querySelectorAll("ul li");
for (let i = 0; i < listItems.length; i++) {
  if ((i + 1) % 2 === 0) {
    listItems[i].classList.add("highlight");
  }
}
