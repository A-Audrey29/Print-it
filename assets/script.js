const slider = document.querySelector(".banner");
const previousButton = document.querySelector(".arrow_left");
const nextButton = document.querySelector(".arrow_right");
const bulletSelector = document.querySelector(".dot_selected")
const bullet = document.querySelector(".dot")


// flêche de gauche
// flêche de gauche
function previous (){
	
};

previousButton.addEventListener("onclick",previous);
// alert("à gauche ok");	

// flêche de droite
function next (){
	
};

nextButton.addEventListener("onclick",next);
// alert("à droite ok");	


// insert des images
 slides.map(slides, index =>{
	const imageElement = document.createElement('img'); //création de l'emplacement des images dans le dom
 	imageElement.src = slides; // on donne la source des images a afficher
	imageElement.id = index; // donne un numéro dans le tableau
 	imageElement.classList.add("banner-img"); // ajout du css
 	slider.appendChild(imageElement); // insertion du slider
})

// boucle pour parcourir l'ensemble du tableau
let scroll = slides;
for (var i = 0;i<slides.length; i++){
	console.log(scroll[i]);
};

// fonction pour passer à la suivante
var slideIndex = 0;



// insert des bullet points



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
];
