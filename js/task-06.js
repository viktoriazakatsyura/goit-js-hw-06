const inputEl = document.querySelector("#validation-input");

const totalLength = inputEl.dataset.length;
console.log(totalLength);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
	if (
		inputEl.value.length < totalLength ||
		inputEl.value.length > totalLength
	) {
		inputEl.classList.add("invalid");
	} else {
		inputEl.classList.add("valid");
		inputEl.classList.remove("invalid");
	}
}
