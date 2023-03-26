const slider = document.querySelector(".banner");
const previousButton = document.querySelector(".arrow_left");
const nextButton = document.querySelector(".arrow_right");


// flêche de gauche
function previous (){
	
};

previousButton.addEventListener("onclick",previous);
alert("à gauche ok");	

// flêche de droite
function next (){
	
};

nextButton.addEventListener("onclick",next);
alert("à droite ok");	



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
