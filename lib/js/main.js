const recipeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const slider = document.querySelector('.slider')
const holder = document.querySelector('.holder')
const prevArrow = document.querySelector('.previous')
const nextArrow = document.querySelector('.next')
let currentSlide = 0
let delta = currentSlide * -800

function nextSlide() {
	if (currentSlide < 6 ) {
	prevArrow.style.color = "#DC3023"
	currentSlide++
	delta = currentSlide * -800
	holder.style.transform = `translateX(${delta}px)`
} else nextArrow.style.color = "#0F636E"
	if (currentSlide === 6) nextArrow.style.color = "#0F636E"
}

function prevSlide() {
	if (currentSlide > 0) {
	nextArrow.style.color = "#DC3023"
	currentSlide--
	delta = currentSlide * -800
	holder.style.transform = `translateX(${delta}px)`
}	else prevArrow.style.color = "#0F636E"
		if (currentSlide === 0) prevArrow.style.color = "#0F636E"
}

prevArrow.addEventListener('click', evt => {
	evt.preventDefault()
	prevSlide()
})
nextArrow.addEventListener('click', evt => {
	evt.preventDefault()
	nextSlide()
})

for (let i = 0; i < 7; i++) {
fetch(recipeUrl)
		.then(res => res.json())
		.then(data => {
			let newSlide = document.createElement('article')
			let ingredients = document.createElement('div')
			let image = document.createElement('div')
			let directions = document.createElement('div')
			let imageUrl = data.meals[0].strMealThumb
			let source = data.meals[0].strSource
			console.log(source)
			newSlide.classList.add('slide')
			ingredients.classList.add('ingredients')
			image.classList.add('image')
			directions.classList.add('directions')
			holder.appendChild(newSlide)
			newSlide.appendChild(ingredients)
			ingredients.innerHTML = `<a target="_blank" href="${source}">${data.meals[0].strMeal}</a>`
			newSlide.appendChild(image)
			image.style.backgroundImage = `url(${imageUrl}/preview)`
			// image.style.background = 'cover'
			newSlide.appendChild(directions)
			directions.innerHTML = `<p>${data.meals[0].strInstructions}</p>`
			
	})
}