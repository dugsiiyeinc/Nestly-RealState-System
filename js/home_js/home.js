function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const loginButton = document.querySelector(".login-button");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  loginButton.classList.toggle("active");
  hamburger.classList.toggle("active");
}
