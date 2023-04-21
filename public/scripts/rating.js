const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating")

stars.forEach(function(star) {
  star.addEventListener("click", setRating);
});

function setRating() {
  const rating = this.dataset.rating;

  stars.forEach(function(star) {
    if (star.dataset.rating <= rating) {
        star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
    
  });
  ratingValue.value = rating;
}
