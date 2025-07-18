let count=0;
let progress=document.querySelector(".progress-bar");

setInterval(() => {
    if(count<=99){
        count++;
        progress.style.width=count+"%";
        progress.textContent=count+"%";

    }else{
        document.querySelector(".progress-bar").textContent="Downloaded";
        clearInterval(this);
    }
},100);// This code sets up a progress bar that increments from 0% to 100% every 100 milliseconds.

