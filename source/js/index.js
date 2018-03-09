/*jshint esversion: 6 */
/* global $ */

$(document).ready(function() {
	'use strict';
	
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = $('.needs-validation');
		// Loop over them and prevent submission
		for (var i = 0; i < forms.length; i++) {
			forms[i].addEventListener('submit', function(event) {
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
			}, false);
		}
	});
});
		
