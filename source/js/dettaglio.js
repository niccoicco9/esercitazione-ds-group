/*jshint esversion: 6 */
/* global $ */

$(document).ready(function() {
    "use strict";
    /* salvo in una variabile l'id del todo */
    var todoId = window.location.hash.substring(1);
    getTodo(todoId);

    /* aggiungo event handler sul bottone #todo-action; quando cliccato viene aggiornata la risorsa*/
    $('#todo-action').on( "click", function() {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: todoId,
                completed: true
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(function (json) {
            console.log(json);
            completaTask();
        });
    });
});
  
function getTodo(id) {
    "use strict";
    $.getJSON(`https://jsonplaceholder.typicode.com/todos/${id}`, function (data) {
        $('#todo-title').html(data.title);
        var card = $("#todo-card");
        if (data.completed === true) {
            $('#todo-header').html('Hai completato il tuo task!');
            $(".card-footer").remove();
            card.removeClass('bg-light');
            card.addClass('bg-success');
        } else {
            $('#todo-header').html('Il tuo task è ancora attivo');
            card.removeClass('bg-light');
            card.addClass('bg-danger');
        }
    });
}
  

function completaTask() {
    'use strict';
    var card = $("#todo-card");
    $('#todo-header').html('Hai completato il tuo task!');
    $(".card-footer").remove();
    card.removeClass('bg-danger');
    card.addClass('bg-success');
}