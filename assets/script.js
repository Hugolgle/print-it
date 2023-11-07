const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const img = document.getElementById("bg-img");
const dots = document.querySelectorAll(".dot")

let currentIndex = 0;

function changeImg(index, direction) {
	if (currentIndex === -1 && direction === "left") {
		currentIndex = slides.length - 1;
	} else if (currentIndex === slides.length && direction === "right") {
		currentIndex = 0;
	}

	const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
	img.src = imagePath;
	img.alt = `Slide ${currentIndex + 1}`;
	const tagLine = document.querySelector(".p");
	tagLine.innerHTML = `${slides[currentIndex].tagLine}`;
}

function changeDot(index) {
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

arrowLeft.addEventListener('click', () => {
	currentIndex = (currentIndex - 1);
	changeImg(currentIndex, "left");
	changeDot(currentIndex);
});


arrowRight.addEventListener('click', () => {
	currentIndex = (currentIndex + 1);
	changeImg(currentIndex, "right");
	changeDot(currentIndex);
});

changeImg(currentIndex, 'start');
changeDot(currentIndex);