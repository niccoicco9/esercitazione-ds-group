/*jshint esversion: 6 */
/* global $ */

$(document).ready(function() {
    "use strict";
    /* salvo in una variabile l'id del todo */
    var todoId = window.location.hash.substring(1);
    getTodo(todoId);
});
  
  function getTodo(id) {
    "use strict";
    $.getJSON(`https://jsonplaceholder.typicode.com/todos/${id}`, function(data) {
        $('#todo-title').html(data.title);
        var card = $("#todo-card");
        console.log(data.completed);
        if (data.completed === true) {
            card.removeClass('bg-light');
            card.addClass('bg-success');
        } else {
            card.removeClass('bg-light');
            card.addClass('bg-danger');
        }





    });
  }
  
