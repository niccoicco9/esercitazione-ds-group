/* global $*/
/* exported getData, showTodos, signin, login, logout, checkLogin*/

var url = 'https://jsonplaceholder.typicode.com/todos/';

function getData() {
	'use strict';
    return {
        extractTodos: function(callback) {
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
				sessionStorage.setItem('onlineUser', JSON.stringify(usersArray[i]));
                i = -1;
            } else { 
				i++;
			}
		}
        if (i !== -1) {
			window.alert('Indirizzo email o password errata');
		} else {
			window.alert(email + " ha effettuato il login.");
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
		var onlineUser = JSON.parse(sessionStorage.getItem('onlineUser'));
		document.getElementById('nav-login').innerHTML = "<a class='nav-link' href='index.html' onclick='logout()'>Logout</a>";
		document.getElementById('nav-signin').innerHTML = "<a class='nav-link' href='index.html'>" + onlineUser.email + "</a>";
		getData().extractTodos(function(data) { 
			showTodos(data, onlineUser.id); 
		});
	}
}

function getRandomInt(min, max) {
	'use strict';
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
  }

function showTodos(data, userId) {
	'use strict';
	var htmlString = '';
	for (var i = 0; i < data.length; i++) {
		if (data[i].userId === userId) {
			if (data[i].completed === true) {
				htmlString+="<tr class='table-success' id='table-row-" + data[i].id + "'>";
			} else {
				htmlString+="<tr class='table-light' id='table-row-" + data[i].id + "'>";
			}
			htmlString+="<th scope='row'>" + data[i].id + "</th><td>" + data[i].title + "</td>";
			htmlString+="<td><button type='button' class='btn btn-light'>Visualizza dettaglio</button>";
			htmlString+="<button type='button' class='btn btn-danger'>Elimina todo</button></td>";
			htmlString+="</tr>";
		}
	}
	document.getElementById('table-body-todos').innerHTML = htmlString;
}