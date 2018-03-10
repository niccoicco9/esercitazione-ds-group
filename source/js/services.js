/* global $ */
/* exported getData, login, signin */

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
		password: form.elements[1].value,
		id: getRandomInt(1, 11)
	};
	var usersArray = [];
	if (localStorage && localStorage.getItem('users') === null) {
		usersArray.push(user);
		localStorage.setItem('users', JSON.stringify(usersArray));
	} else {
		usersArray = JSON.parse(localStorage.getItem('users'));
		var i = 0;
        while (i >= 0 && i < usersArray.length) {
            if (usersArray[i].email.trim() === user.email.trim()) {
                i = -1;
			} else {
				i++;
			}
        }
        if (i !== -1) {
            usersArray.push(user);
            localStorage.setItem("users", JSON.stringify(usersArray));
        } else {
			alert("L'email inserita è già stata utilizzata");
		}
	}
}


function getRandomInt(min, max) {
	'use strict';
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
  }