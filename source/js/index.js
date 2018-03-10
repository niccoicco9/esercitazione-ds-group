/* global checkLogin, login, signin */

window.addEventListener('load', function() {
	'use strict';
	checkLogin();
	addListeners();
});

function addListeners() {
	'use strict';
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.getElementsByClassName('needs-validation');
	// Loop over them and prevent submission
	for (var i = 0; i < forms.length; i++) {
		forms[i].addEventListener('submit', checkForm, false);
	}
}

function checkForm() {
	if (this.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	} else {
		if (this.id === 'form-login') {
			login(this);
		} else {
			signin(this);
		}
	}
	this.classList.add('was-validated');
}