const inputEl = document.getElementById("font-size-control");

const textEl = document.getElementById("text");

inputEl.oninput = function () {
	textEl.style.fontSize = inputEl.value + "px";
};
