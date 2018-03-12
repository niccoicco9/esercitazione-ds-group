# esercitazione-ds-group
Esercitazione DS Group sulle tecnologie studiate

Tecnologie utilizzate: HTML, CSS, javascript, jQuery, Bootstrap

L'idea originaria era quella di gestire degli elementi di tipo post prelevati dall'applicativo REST. Abbiamo optato però
successivamente per i todo. Il motivo è che a nostro parere si adattano meglio all'implementazione della funzionalità di 
modifica item. I todo sono associati tramite id a un particolare utente, ed è infatti possibile registrarsi tramite un form: a registrazione effettuata verrà associato all'utente un id selezionato casualmente.

Terminato il caricamento della pagina index.html vengono eseguite le seguenti funzioni:

<div class="highlight highlight-source-js">
<pre>
window.addEventListener('load', function() {
	'use strict';
	checkLogin();
	addListeners();
});
</pre>
</div>

La funzione checkLogin() controlla che sia stato effettuato effettivamente l'accesso controllando l'item 'onlineUser' salvato nel sessionStorage del browser; se positivo, viene eseguita la funzione 'extractTodos()' che preleva i dati dal servizio REST:

<div class="highlight highlight-source-js">
<pre>
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
}</pre>
</div>


Cliccando su un todo si passa alla pagina di dettaglio del todo stesso, che può essere completato oppure no.  
