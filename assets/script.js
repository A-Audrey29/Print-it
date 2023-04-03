// DOM
const  slideShow = document.getElementById("banner")
// const slide = document.querySelector(".banner-img")
const previousSlide = document.getElementById("previous_btn")
const nextSlide = document.getElementById("next_btn")
const dot = document.querySelector('dot')

// const slider = document.querySelector(".slider")

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

// boucle créer avec Charles
for (let index = 0; index < slides.length; index++) {
	const data = slides[index]
	const image = document.createElement("img") 
	image.setAttribute("src",data.src)
	// console.log(image)
	banner.appendChild(image)
	banner.classList.add("banner")
}

	// insetion des images
slides.map((slideSrc, index) => {
	const slideElement = document.createElement('img')
	slideElement.src = slideSrc
	slideElement.id = index
	slideElement.classList.add('.banner-img')
	slideShow.appendChild(slideElement)


	// bullet points
const dotElement = document.createElement("a")
dotElement.href = `#${index}`
dotElement.classList.add('.dot')
dot.appendChild(dotElement)
})	

	// flêches 
nextSlide.addEventListener("click", () => {
   const slideWidth = slides.clientWidth
	slideShow.scrollLeft += slideWidth
	console.log(slideWidth)
	nextSlide.classList.add(".banner-img")

})

previousSlide.addEventListener("click", () => {
	const slideWidth = slides.clientWidth
	slideShow.scrollL eft -= slideWidth
	console.log(slideWidth)
	previousSlide.classList.add(".banner-img")
})

// const slideWidth = slides.clientWidth

// slideShow.scrollTo(0,0)
// let currentIndex = 0
// currentIndex === 0
// ? (previousSlide.style.display = "none")
//     : (previousSlide.style.display = "block");
// document.querySelector(`a[href='#${currentIndex}']`).classList.add("active");






// const cle = "image"
// console.log(slides[2][cle]);
// console.log(slides[2].tagLine);
// console.log(image)
