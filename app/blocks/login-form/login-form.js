import { modal } from "./../modal/modal";

const signInButton = document.querySelector('.user-block__sign-in');
const loginForm = document.querySelector('.login-form');
const login = loginForm.querySelector('[name=login]');
const password = loginForm.querySelector('[name=password]');
const storageLogin = localStorage.getItem('login');


signInButton.onclick = function(e) {
	e.preventDefault();
	modal.start('.login-form');

	if (storageLogin) {
		login.value = storageLogin;
	}
}


loginForm.onsubmit = (e) => {
	
	if (!login.value || !password.value) {
		
		e.preventDefault();
		alert( 'Нужно ввести логин и пароль' );
	
	} else {
		
		localStorage.setItem('login', login.value);
		console.log(localStorage.getItem('login'));
	}

}