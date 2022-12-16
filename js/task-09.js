function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");

const changeColorEl = document.querySelector(".change-color");

const colorEl = document.querySelector(".color");

const changeColorRandom = function () {
	getRandomHexColor();
	const color = getRandomHexColor();
	document.body.style.backgroundColor = color;
	colorEl.textContent = color;
};

// function changeColorRandom() {
// 	bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
// 	colorEl.textContent = getRandomHexColor();
// }

changeColorEl.addEventListener("click", changeColorRandom);
