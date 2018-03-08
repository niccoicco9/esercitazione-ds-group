/*jshint esversion: 6 */
/* global $ */

$(document).ready(function() {
  'use strict';
  /* salvo in una variabile il numero di post da visualizzare sulla pagina */
  const number = 5;
  getPosts(number);
});

function getPosts(number) {
  'use strict';
  var arrayPosts = new Array(number);
  for (var i = 0; i < arrayPosts.length; i++) {
    var randomInt = getRandomInt(0, 100);
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomInt}`)
    .then(response => response.json())
    .then(function(response) {
      
      








    });
  }
}

function getRandomInt(min, max) {
  'use strict';
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}