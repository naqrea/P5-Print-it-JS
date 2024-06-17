const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById("banner")
const image = document.getElementById("image")
const tagLine = document.getElementById("tagline")
const leftArrow = document.getElementById("arrow_left")
const rightArrow = document.getElementById("arrow_right")
const slidesCount = slides.length

let slidesOrder = 0
function changeSlide(slidesOrder) {
	if (slidesOrder > slidesCount - 1) slidesOrder = 0
	image.src = `assets/images/slideshow/${slides[slidesOrder].image}`
	tagLine.innerHTML = (slides[slidesOrder].tagLine)
}

leftArrow.addEventListener("click", () => changeSlide(slidesOrder--))
rightArrow.addEventListener("click", () => changeSlide(slidesOrder++))