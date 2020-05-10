let recipeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'


fetch(recipeUrl)
		.then(res => res.json())
		.then(data => {
			console.log(data.meals[0].strMeal)
	})