/* global $ */

$(document).ready(function() {
  "use strict";
  checkLogin();
  /* recupero l'oggetto todo dall'url */
  var todo = JSON.parse(window.atob(window.location.hash.substring(1)));
  var todoId = todo.id;
  showTodo(todo);


  /* aggiungo event handler sul bottone #todo-action; quando cliccato viene aggiornata la risorsa*/
  $("#todo-action").on("click", function() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: todoId,
        completed: true
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(function(json) {
        console.log(json);
        completaTask();
      });
  });
});

function completaTask() {
  "use strict";
  var card = $("#todo-card");
  $("#todo-header").html("Hai completato il tuo task!");
  $(".card-footer").remove();
  card.removeClass("bg-danger");
  card.addClass("bg-success");
}

function showTodo(todo) {
  'use strict';
  $("#todo-title").html(todo.title);
  var card = $("#todo-card");
  if (todo.completed === true) {
    $("#todo-header").html("Hai completato il tuo task!");
    $(".card-footer").remove();
    card.removeClass("bg-light");
    card.addClass("bg-success");
  } else {
    $("#todo-header").html("Il tuo task è ancora attivo");
    card.removeClass("bg-light");
    card.addClass("bg-danger");
  }
}