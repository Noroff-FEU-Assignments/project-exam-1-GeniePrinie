const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const slideWidth = slide.clientWidth;

nextButton.addEventListener("click", () => {
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  slidesContainer.scrollLeft -= slideWidth;
});
