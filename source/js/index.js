/*jshint esversion: 6 */
/* global $ */

$(document).ready(function() {
  'use strict';
  /* salvo in una variabile il numero di post da visualizzare sulla pagina */
  const number = 4;
  getPosts(number);
});

function getPosts(number) {
  'use strict';
  for (var i = 0; i < number; i++) {
    var randomInt = getRandomInt(0, 100);
    $.getJSON(`https://jsonplaceholder.typicode.com/posts/${randomInt}`, function(data) {
      var rowPost = $("#row-post").children();
      console.log(data);
      console.log(rowPost);
    });
  }
}

function getRandomInt(min, max) {
  'use strict';
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}


