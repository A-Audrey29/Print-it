// DOM
const  slideShow = document.getElementById("banner")
const slide = document.querySelector(".banner-img")
const previousSlide = document.querySelector(".arrow_left")
const nextSlide = document.querySelector(".arrow_right")
const dots = document.getElementById("dots")
const tagLine = document.getElementById("tag-line")
let compteur = 0
let oldDot

const slides = [
	{
		src:"./assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		src:"./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		src:"./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		src:"./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

dots.classList.add("dots")

	// insetion des points
slides.map((slideSrc, index) => {
	// bullet points
	const dotElement = document.createElement("a")
	console.log(dotElement);
	dotElement.href = `#${index}`
	dotElement.classList.add('dot')
	dots.appendChild(dotElement)
})

	// sélect par défaut du premier point
let firstDot = dots.children[0]
firstDot.classList.add("dot_selected")
oldDot = firstDot

	// event flèche 
nextSlide.addEventListener("click", () => {
	if (oldDot) {
		oldDot.classList.remove("dot_selected")
	}
	
	//incrémenter le compteur
	compteur++
	if (compteur == slides.length){
		compteur = 0
	}
	//récupérer la source de la prochaine image depuis le tableau slides
	let obj = slides[compteur]
	let currentDot = dots.children[compteur]
	//modifier l'attribut src du banner-img avec la nouvelle source
	slide.setAttribute("src", obj.src)
	tagLine.innerHTML = obj.tagLine
	currentDot.classList.add("dot_selected")

	oldDot = currentDot
})

previousSlide.addEventListener("click", () => {
	if (oldDot) {
		oldDot.classList.remove("dot_selected")
	}
	if (compteur == 0) {
		compteur = slides.length
	}
	//récupérer la balise banner-img 
	//incrémenter le compteur
	compteur--
	//récupérer la source de la prochaine image depuis le tableau slides
	let obj = slides[compteur]
	let currentDot = dots.children[compteur]
	//modifier l'attribut src du banner-img avec la nouvelle source
	slide.setAttribute("src", obj.src)
	tagLine.innerHTML = obj.tagLine
	currentDot.classList.add("dot_selected")

	oldDot = currentDot
})

/*for (let index = 0; index < slides.length; index++) {
	const data = slides[index]
	const image = document.createElement("img") 
	image.setAttribute("src",data.src)
	// console.log(image)
	banner.appendChild(image)
	banner.classList.add("banner")
}
*/