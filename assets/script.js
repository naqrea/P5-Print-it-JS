const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const banner = document.getElementById("banner");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const totalSlides = slides.length;
let currentSlideIndex = 0;

// EVENT LISTENERS
leftArrow.addEventListener("click", () => {
  changeSlide(--currentSlideIndex);
  console.log("Slide précédente");
  selectedDot();
});

rightArrow.addEventListener("click", () => {
  changeSlide(++currentSlideIndex);
  console.log("Slide suivante");
  selectedDot();
});

// DOTS
for (let i = 0; i < totalSlides; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
}

function selectedDot() {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

selectedDot();

// CHANGE SLIDE
function changeSlide(newSlideIndex) {
  if (newSlideIndex > totalSlides - 1) currentSlideIndex = 0;
  else if (newSlideIndex < 0) currentSlideIndex = totalSlides - 1;
  else currentSlideIndex = newSlideIndex;

  image.src = `assets/images/slideshow/${slides[currentSlideIndex].image}`;
  tagLine.innerHTML = slides[currentSlideIndex].tagLine;
}
