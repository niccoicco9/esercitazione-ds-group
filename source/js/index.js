/*jshint esversion: 6 */
/* global $ */

$(document).ready(function() {
	'use strict';
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function() {
		window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = $('.needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
			} else {
				if (form.id === 'form-login') {
					login();
				} else {
					signin();
				}
			}
			form.classList.add('was-validated');
			}, false);
		});
		}, false);
	})();



});

/*
function getTodos(number) {
  "use strict";
  for (var i = 0; i < number; i++) {
    (function(i) {
      var randomInt = getRandomInt(0, 200);
      $.getJSON(
        `https://jsonplaceholder.typicode.com/todos/${randomInt}`,
        function(data) {
          var rowPost = $("#row-post");
          rowPost.append(
            `<div class='col-md-3'><div class='card' style='width: 18rem;'><div class='card-body'><h5 class='card-title'>${
              data.title
            }</h5><p class='card-text'></p><a href='dettaglio.html#${
              data.id
            }' class='btn btn-primary'>Visualizza</a></div></div></div>`
          );
        }
      );
    })(i);
  }
}*/

function getRandomInt(min, max) {
  "use strict";
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
