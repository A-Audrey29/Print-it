const  slideShow = document.getElementById("banner")
const slide = document.querySelector(".banner-img")
const previousSlide = document.getElementById("previous_btn")
const nextSlide = document.getElementById("next_btn")
const slider = document.querySelector(".slider")

nextSlide.addEventListener("click", () => {
	const slideWidth = slide.clientWidth
	slideShow.scrollLeft += slideWidth
	console.log(slideWidth)
})

previousSlide.addEventListener("click", () => {
	const slideWidth = slide.clientWidth
	slideShow.scrollLeft -= slideWidth
	console.log(slideWidth)
	previousSlide.classList.add(".banner-img")
})

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


for (let index = 0; index < slides.length; index++) {
	const data = slides[index]
	const image = document.createElement("img") 
	image.setAttribute("src",data.src)
	console.log(image)
	banner.appendChild(image)
	banner.classList.add(".banner")
}



// const cle = "image"
// console.log(slides[2][cle]);
// console.log(slides[2].tagLine);
// console.log(image)
