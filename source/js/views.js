/* exported showTodos */

function showTodos(data, userId) {
	'use strict';
	var htmlString = '';
	
	for (var i = 0; i < data.length; i++) {
		if (data[i].userId === userId) {
			htmlString+="<tr class='table-light' id='table-row-" + data[i].id + "'>";
			htmlString+="<th scope='row'>" + data[i].id + "</th><td>" + data[i].title + "</td>";
			htmlString+="<td class='td-center-content'><a href='dettaglio.html#" + window.btoa(JSON.stringify(data[i])) + "' class='btn btn-light'>Visualizza dettaglio</a>";
			htmlString+="<button type='button' class='btn btn-danger'>Elimina todo</button></td>";
			htmlString+="</tr>";
		}
	}
	document.getElementById('table-body-todos').innerHTML = htmlString;
}