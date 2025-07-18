let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");


form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number

  let emailans=emailRegex.text(email.value);
    let passwordans=passwordRegex.test(password.value);

    let isValid = true; // Flag to track overall validity

    if(!emailans) {
        document.querySelector("#emailError").textContent = "Invalid email format";
        document.querySelector("#emailError").style.display = "initial";
        isValid=false;
    }
    if(!passwordans) {
        document.querySelector("#passwordError").textContent = "Password must be at least 8 characters long and contain at least one letter and one number";
        document.querySelector("#passwordError").style.display = "initial";
        isValid=false;
    }

    if(isValid){
        document.querySelector("resultMessage").textContent = "Form submitted successfully!";
    }

});                                                         