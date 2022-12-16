const formEl = document.querySelector(".login-form");

const checkForm = (event) => {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Please fill in all fields");
	}
	console.log({
		email: email.value,
		password: password.value,
	});
	formEl.reset();
};

formEl.addEventListener("submit", checkForm);

// function checkForm(event) {
// 	event.preventDefault();

// 	const {
// 		elements: { email, password },
// 	} = event.currentTarget;

// 	if (email.value === "" || password.value === "") {
// 		return alert("Please fill in all fields");
// 	}

// 	const result = { email: email.value, password: password.value };
// 	console.log(result);
// 	event.currentTarget.result();
// }
