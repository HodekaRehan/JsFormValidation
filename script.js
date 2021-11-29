const username = document.getElementById('userName');
const email = document.getElementById('userEmail');
const password1 = document.getElementById('userPassword');
const password2 = document.getElementById('confirmPassword');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const password1Value = password1.value.trim();
	const password2Value = password2.value.trim();

	if (usernameValue === '') {
		setErrorFor(username, 'Username cannot be empty');
	} else if (usernameValue.length < 3) {
		setErrorFor(username, 'Username should have atleast 3 characters');
	} else {
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email is not valid');
	} else {
		setSuccessFor(email);
	}

	if (password1Value === '') {
		setErrorFor(password1, 'Password cannot be empty');
	} else if (password1Value.length < 6) {
		setErrorFor(password1, 'Password should have atleast 6 characters');
	} else {
		setSuccessFor(password1);
	}

	if (password2Value === '') {
		setErrorFor(password2, 'Password cannot be empty');
	} else if (password2Value !== password1Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;

	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;

	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
