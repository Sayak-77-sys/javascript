// select all <li> elements and change their text to "I am a list item"


let lis=document.querySelectorAll("li");

for(let i=0;i<lis.length;i++){
    lis[i].textContent="apple "+(i+1);
    console.log(lis[i].textContent);
}

let i=0;
lis.forEach(function(li){
    li.textContent="mango "+(i+1);
    i++;
    console.log(li.textContent);
})







i=0;
for(let li of lis){
    li.textContent="banana "+(i+1);
    console.log(li.textContent);
    i++;
}
