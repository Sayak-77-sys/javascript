//promises and promise chaining in JavaScript
//promises are a way to handle asynchronous operations in JavaScript
//they represent a value that may be available now, or in the future, or never  

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" }; // simulated data
      let success = false; // simulate success or failure
      if(success) {
        resolve(data); // resolve the promise with data
      }else {
        reject("Error fetching data"); // reject the promise with an error
      }
      
    }, 2000);
  });
}

let promise = fetchData();


promise.then(data => {
  console.log("Data received:", data); // handle the resolved value
}).catch(error => {
  console.error("Error fetching data:", error); // handle any errors
}).finally(() => {
  console.log("Fetch operation completed"); // this will always run
});
