//async-await.js
//we will discuss about advanced JavaScript concepts
//async/await is a modern way to handle asynchronous operations in JavaScript
//it allows us to write asynchronous code that looks synchronous, making it easier to read and maintain     
function asyncAwaitExample() {
  console.log("Starting async operation...");

  // Using async/await to handle asynchronous operation
  fetchData()
    .then(data => {
      console.log("Data fetched:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });

  console.log("Async operation initiated, waiting for data...");
}

// Call the asyncAwaitExample function to demonstrate async/await
asyncAwaitExample();

// This function simulates an asynchronous operation using a promise
// It fetches data after a delay of 2 seconds
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" }; // simulated data
      let success = true; // simulate success or failure
      if(success) {
        resolve(data); // resolve the promise with data
      } else {
        reject("Error fetching data"); // reject the promise with an error
      }
    }, 2000);
  });
}


