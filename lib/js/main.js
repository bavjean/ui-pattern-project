const recipeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const slider = document.querySelector('.slider')
const holder = document.querySelector('.holder')
const prevArrow = document.querySelector('.previous')
const nextArrow = document.querySelector('.next')
let currentSlide = 1
let delta = currentSlide * -800

function nextSlide() {
	holder.style.transform = `translateX(${delta}px)`
	currentSlide++
	delta = currentSlide * -800
}

function prevSlide() {
	currentSlide--
	delta = currentSlide * -800
	holder.style.transform = `translateX(${delta}px)`
	// currentSlide--
	// delta = currentSlide * 500
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
			newSlide.classList.add('slide')
			ingredients.classList.add('ingredients')
			image.classList.add('image')
			directions.classList.add('directions')
			holder.appendChild(newSlide)
			newSlide.appendChild(ingredients)
			ingredients.innerHTML = `<h2>${data.meals[0].strMeal}</h2>`
			newSlide.appendChild(image)
			image.style.background = `url(${data.meals[0].strMealThumb})`
			newSlide.appendChild(directions)
			directions.innerHTML = `<p>${data.meals[0].strInstructions}</p>`
			
	})
}