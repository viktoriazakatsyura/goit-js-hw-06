const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

// const ingredientsList = document.getElementById("ingredients");
// console.log(ingredientsList);

// const foodIngridient = ingredients.forEach((ingredient) => {
// 	const itemElement = document.createElement("li");
// 	itemElement.textContent = ingredient;

// 	ingredientsList.append(itemElement);
// });

const createItem = (text) => {
	const item = document.createElement("li");
	item.textContent = text;
	return item;
};

document.querySelector("#ingredients").append(...ingredients.map(createItem));
