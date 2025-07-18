//pattern for the form validation
let name = document.querySelector("#name");
let form = document.querySelector("form");  

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission 
    const regex = /^[a-zA-Z]{3,}$/; // Regex to validate name
    let ans=regex.test("harsh@test.com");
    console.log(ans); // true if valid, false if not
});