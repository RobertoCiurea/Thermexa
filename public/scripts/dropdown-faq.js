const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  const parent = button.parentElement;
  const answer = parent.nextElementSibling;
  button.addEventListener("click", () => {
    answer.classList.toggle("active");
    button.classList.toggle("active");
  });
});
