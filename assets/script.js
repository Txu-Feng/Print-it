const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


const arrowLeft = document.createElement("img");
arrowLeft.src = "./assets/images/arrow_left.png";
arrowLeft.classList.add("arrow", "arrow_left");

const arrowRight = document.createElement("img");
arrowRight.src = "./assets/images/arrow_right.png";
arrowRight.classList.add("arrow", "arrow_right");

const banner = document.querySelector("#banner");
banner.appendChild(arrowLeft);
banner.appendChild(arrowRight);

const dots = document.querySelector('.dots');
const bannerIMG = document.querySelector('.banner-img');
const bannerTXT = document.querySelector('.banner-p');
var positionSlide = 0;

for(var i=0 ; i<slides.length ; i++) {
	let newDot = document.createElement("div");
	newDot.classList.add("dot");
	dots.appendChild(newDot);
	if (i == 0) {
		newDot.classList.add("dot_selected");
	}
}

let dot = document.querySelectorAll('.dot');
dot[0].classList.add('dot_selected');

arrowLeft.addEventListener('click', function(){
	positionSlide--;
	if (positionSlide === -1) {
		positionSlide = slides.length - 1;
	}
	//alert("click sur la flèche gauche");
	updateSlide();
});

arrowRight.addEventListener('click', function(){
	positionSlide++;
	if (positionSlide === slides.length) {
		positionSlide = 0;
	}
	//alert("click sur la flèche droite");
	updateSlide();
});

function updateSlide() {
	bannerIMG.src = slides[positionSlide].image;
	bannerTXT.innerHTML = slides[positionSlide].tagLine;
	for (let i=0 ; i<dot.length; i++) {
		if (i === positionSlide) {
			dot[i].classList.add('dot_selected');
		} else {
			dot[i].classList.remove('dot_selected');
		}
	}
}


