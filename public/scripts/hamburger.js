const hamburgerToggle = document.querySelector(".hamburger-toggle");
const navBar = document.querySelector(".header-nav");
const navList = document.querySelector(".navbar-list");
const bottomHeader = document.querySelector(".bottom-header");
hamburgerToggle.addEventListener("click", () => {
  hamburgerToggle.classList.toggle("active");
  navBar.classList.toggle("active");
  navList.classList.toggle("active");
  bottomHeader.classList.toggle("active");
});
