//

let h1document = document.querySelector("h1");
window.addEventListener("keydown", function (dets) {
    if(dets.key === "Enter") {
        h1document.style.color = "green";
    }
    else if(dets.key === "Escape") {
        h1document.style.color = "pink";
    }else if(dets.key === " "){
        h1document.style.color = "orange";
        h1document.textContent = "You pressed space!";
    } 
    else{
        h1document.textContent
        = "You pressed: " + dets.key;
}
});