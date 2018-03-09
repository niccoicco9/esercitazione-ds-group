/* global $ */

var url = 'https://jsonplaceholder.typicode.com/todos/';

function getData() {
	'use strict';
    return {
        extractTodos: function(callback) {
            $.getJSON(url, callback);
        },
        extractUserTodo: function(user, callback) {
            $.getJSON(url, callback);
        }
    };
}

function login(form) {
	'use strict';
	var email = form.elements[0].value;
	var password = form.elements[1].value;
}

function signin(form) {
	'use strict';
	var user = {
		email: form.elements[0].value,
		password: form.elements[1].value
	};

	if (localStorage && localStorage.getItem('users') === null) {
		var users = new Array();
		users.push(user);
	} else {
		



	}






	localStorage.setItem('users', JSON.stringify(users));
}