//localStorage
//store kaise kare -setItem
// data fetch kaise kare - getItem
//remove kaise kare
//update kaise kare

localStorage.setItem("name", "John Doe");

localStorage.getItem("name"); // "John Doe"

localStorage.removeItem("name");

localStorage.setItem("age", "30");

localStorage.setItem("age", "31"); // Update age to 31



//we cannot store any thing other than string in localStorage
//we can store objects by converting them to JSON strings
//we can also store arrays in localStorage by converting them to JSON strings
//we can retrieve them by parsing the JSON strings back to objects or arrays
//we can also clear all data from localStorage using localStorage.clear()
//localStorage is a web storage API that allows us to store data in the browser
//it is similar to cookies but has a larger storage capacity and is easier to use
//localStorage is persistent, meaning the data will remain even after the browser is closed
//it is useful for storing user preferences, application state, and other data that needs to persist
//localStorage is accessible from any page on the same domain
//it is a key-value store, where the key is a string and the value can be
// any string, including JSON strings for objects and arrays
//localStorage is synchronous, meaning it blocks the main thread while reading or writing data

// 1. Storing and Retrieving Objects
const user = {
    name: "John Doe",
    age: 30,
    isAdmin: false,
    preferences: {
        theme: "dark",
        notifications: true
    }
};

// Store object
localStorage.setItem('user', JSON.stringify(user));

// Retrieve object
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.preferences.theme); // "dark"

// 2. Storing and Retrieving Arrays
const todos = [
    { id: 1, task: "Learn JavaScript", completed: true },
    { id: 2, task: "Master LocalStorage", completed: false }
];

// Store array
localStorage.setItem('todos', JSON.stringify(todos));

// Retrieve array
const savedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(savedTodos[0].task); // "Learn JavaScript"

// 3. Storing and Retrieving Numbers
const score = 42;
localStorage.setItem('score', score.toString());
const savedScore = parseInt(localStorage.getItem('score'));
console.log(typeof savedScore); // "number"

// 4. Storing and Retrieving Booleans
const isDarkMode = true;
localStorage.setItem('darkMode', isDarkMode);
const savedMode = localStorage.getItem('darkMode') === 'true';
console.log(typeof savedMode); // "boolean"

// 5. Error Handling
try {
    const data = localStorage.getItem('nonexistent');
    if (data === null) {
        console.log('Data not found!');
    }
    const parsedData = JSON.parse(data);
} catch (error) {
    console.error('Error parsing data:', error);
}

// 6. Checking if data exists
function checkData(key) {
    return localStorage.getItem(key) !== null;
}

console.log(checkData('user')); // true/false



