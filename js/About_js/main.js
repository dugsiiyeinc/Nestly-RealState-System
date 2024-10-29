// **Selectng DOM elements
const authSwitch = document.querySelector("#authSwitch");
const authButton = document.querySelector("#authButton");
const switchForm = document.querySelector("#switchForm");
const formTitle = document.querySelector("#form-title");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");


let signIn = true;

document.body.addEventListener("click", (e) => {
    if (e.target.id != "switchForm") return;
    
    switchAuthForm();
  });
  
  function switchAuthForm() {
    // Placeholder for switching form functionality
  }
  