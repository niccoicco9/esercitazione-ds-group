/*jshint esversion: 6 */
/* global $ */

$(document).ready(function() {
  "use strict";
  getPosts();
});

function getPosts() {
    



  "use strict";
  fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then(response => response.json())
    .then(json => console.log(json));
}
