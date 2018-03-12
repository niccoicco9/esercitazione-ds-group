"use strict";

function salva(){
    alert('qui');
    var Nome = document.getElementById('nome').value;
    var Email = document.getElementById('email').value;
    var Password = document.getElementById('password').value;
    var Citta = document.getElementById('citta').value;
    var Cellulare = document.getElementById('cellulare').value;




    localStorage.setItem('nome', Nome);
    localStorage.setItem('email', Email);
    localStorage.setItem('password', Password);
    localStorage.setItem('citta', Citta);
    localStorage.setItem('telefono', Cellulare);
    

}