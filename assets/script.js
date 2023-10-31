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

const arrowLeft = document.querySelector("arrow_left");
const arrowRight = document.querySelector("arrow_right");
const img = document.getElementById("bg-img");

// arrowLeft.addEventListener("click", () => {
// 	for (let i = 0; i < slides; i++) {
// 		if (img.src == "./assets/images/slideshow/" + slides[1].image) {
// 			img.src = "./assets/images/slideshow/" + slides[2].image;
// 		} else {
// 			img.src = "./assets/images/slideshow/" + slides[2].image;
// 		}
// 	}
// })

function changeImg() {
	for (let i = 0; i < slides.length; i++) {
		if (img.src == "./assets/images/slideshow/" + slides[i].image) {
			img.src = "./assets/images/slideshow/" + slides[i].image;
		} else {
			img.src = "./assets/images/slideshow/" + slides[i].image;
		}
	}
}



// function changeImg() {
// 	if (img.src == "./assets/images/slideshow/slide1.jpg") {
// 		img.src = "./assets/images/slideshow/slide2.jpg";

// 		if (img.src == "./assets/images/slideshow/slide2.jpg") {
// 			img.src = "./assets/images/slideshow/slide3.jpg";

// 			if (img.src == "./assets/images/slideshow/slide3.jpg") {
// 				img.src = "./assets/images/slideshow/slide4.png";

// 				if (img.src == "./assets/images/slideshow/slide4.png") {
// 					img.src = "./assets/images/slideshow/slide1.jpg";
// 				} else {
// 					img.src = "./assets/images/slideshow/slide1.jpg";
// 				}
// 			} else {
// 				img.src = "./assets/images/slideshow/slide4.png";
// 			}
// 		} else {
// 			img.src = "./assets/images/slideshow/slide3.jpg";
// 		}
// 	} else {
// 		img.src = "./assets/images/slideshow/slide2.jpg";
// 	}
// }


// function changeImg() {
// 	if (img.src == "./assets/images/slideshow/slide1.jpg") {
// 		img.src = "./assets/images/slideshow/slide2.jpg";
// 	} else if (img.src = "./assets/images/slideshow/slide2.jpg") {
// 		img.src = "./assets/images/slideshow/slide3.jpg";
// 	} else if (img.src = "./assets/images/slideshow/slide3.jpg") {
// 		img.src = "./assets/images/slideshow/slide4.png";
// 	} else {
// 		img.src = "./assets/images/slideshow/slide1.jpg";
// 	}

// }
