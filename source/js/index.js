/*jshint esversion: 6 */
/* global $ */

$(document).ready(function() {
  "use strict";
  /* salvo in una variabile il numero di post da visualizzare sulla pagina */
  const number = 8;
  getPosts(number);
});

function getPosts(number) {
  "use strict";
  for (var i = 0; i < number; i++) {
	(function(i) {
		var randomInt = getRandomInt(0, 200);
		$.getJSON(`https://jsonplaceholder.typicode.com/todos/${randomInt}`, function(data) {
			var rowPost = $("#row-post");
			rowPost.append(`<div class='col-md-3'><div class='card' style='width: 18rem;'><div class='card-body'><h5 class='card-title'>${data.title}</h5><p class='card-text'></p><a href='todo.html' class='btn btn-primary'>Visualizza</a></div></div></div>`);
		});
	})(i);
  }
}

function getRandomInt(min, max) {
  "use strict";
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
