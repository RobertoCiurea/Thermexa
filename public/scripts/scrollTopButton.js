const scrollButton = document.querySelector(".scroll-button");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 500) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

scrollButton.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
