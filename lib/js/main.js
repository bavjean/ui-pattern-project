const recipeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const slider = document.querySelector('.slider')
const holder = document.querySelector('.holder')
const prevArrow = document.querySelector('.previous')
const nextArrow = document.querySelector('.next')

for (let i = 0; i < 7; i++) {
fetch(recipeUrl)
		.then(res => res.json())
		.then(data => {
			console.log(data.meals[0])
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
			newSlide.appendChild(image)
			newSlide.appendChild(directions)
	})
}