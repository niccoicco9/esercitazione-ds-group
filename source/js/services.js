/* global $ */

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