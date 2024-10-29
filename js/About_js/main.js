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
// **  Toggle Form
document.body.addEventListener("click", (e) => {
    if (e.target.id != "switchForm") return;
    
    switchAuthForm();
  });
  
  function switchAuthForm() {
    // Placeholder for switching form functionality
  }
  
//   ** Set Up Auth Form Submission Event
const authForm = document.querySelector("#authForm");

authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    username: signIn ? undefined : username.value,
    email: email.value,
    password: password.value,
  };

  if (signIn) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (user) => user.email === email.value && user.password === password.value
    );

    if (existingUser) {
      localStorage.setItem("onlineUser", JSON.stringify(existingUser));
      window.location.href = '../html/movies.html'
    } else {
      alert("Invalid Credentials");
      return;
    }
  } else {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.username === username.value && user.email === email.value
    );

    if (existingUser) {
      alert(`User ${existingUser.username} Already exists`);
      return;
    }
    
    if (confirmPassword.value !== password.value) {
    alert("Password mismatch");
    return;
  }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfuly");
    switchAuthForm();
  }

  
});
