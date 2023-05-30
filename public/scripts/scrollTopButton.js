const scrollButton = document.querySelector(".scroll-button");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 400) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

function scrollToTop() {
  let currentPosition = document.documentElement.scrollTop;
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 30);
  }
}
scrollButton.addEventListener("click", scrollToTop);
