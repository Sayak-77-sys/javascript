//setting a timeout to execute a function after 2 seconds
let tm=setTimeout(() => {
  console.log("2 seconds have passed");
}, 2000);

//clearing the timeout before it executes

clearTimeout(tm);


setInterval(() => {
  console.log("This will run every 2 seconds");
}, 2000);

//clearing the interval after 10 seconds
setTimeout(() => {
  clearInterval(setInterval(() => {
    console.log("This will run every 2 seconds");
  }, 2000));
}, 10000);


//set an interval to log a message every second
let intervalId = setInterval(() => {
  console.log("Logging every second");
}, 1000);

//clear the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared after 5 seconds");
}, 5000);   


//set an interval to log 10 to 1 and then clear it
let countdown = 10;
let countdownInterval = setInterval(() => {
  console.log(countdown);
  countdown--;
  if (countdown < 0) {
    clearInterval(countdownInterval);
    console.log("Countdown finished");
  }
}, 1000);   



