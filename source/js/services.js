/* global $ */
/* exported getData, signin, login, logout, checkLogin*/

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
			localStorage.setItem('users', JSON.stringify(usersArray));
			window.alert('Registrazione effettuata con successo');
        } else {
			window.alert('Email già utilizzata');
		}
	}
}

function login(form) {
	'use strict';
    var email = form.elements[0].value;
    var password = form.elements[1].value;

    if (localStorage.getItem('users') === null) {
        window.alert('Indirizzo email non registrato');
    } else {
		var usersArray = JSON.parse(localStorage.getItem('users'));
        var i = 0;
        while (i >= 0 && i < usersArray.length) {
            if (usersArray[i].email.trim() === email.trim() && usersArray[i].password === password) {
                delete usersArray[i].password;
				sessionStorage.setItem('onlineUser', JSON.stringify(usersArray[i]));
				window.alert(email + " ha effettuato il login.");
                i = -1;
            } else { 
				i++;
			}
        }
        if (i !== -1) {
			window.alert('Indirizzo email o password errata');
		}
    }
}

function logout() {
	'use strict';
	sessionStorage.removeItem('onlineUser');
	window.alert("Hai effettuato il logout.");
}

function checkLogin() {
	'use strict';
	if (sessionStorage && sessionStorage.getItem('onlineUser')) {
		var onlineUser = JSON.parse(localStorage.getItem('users'));
		document.getElementById('nav-login').innerHTML = "<a class='nav-link' href='index.html' onclick='logout()'>Logout</a>";
		document.getElementById('nav-signin').innerHTML = "<a class='nav-link' href='index.html'>" + onlineUser[0].email + "</a>";
	}
}

function getRandomInt(min, max) {
	'use strict';
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
  }