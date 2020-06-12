// chiedo all'utente il suo nome
var nome=prompt("inserisci il proprio nome:");
// poi chiedi il suo cognome
var cognome=prompt("inserisci il proprio cognome:");
// chiedi il suo colore preferito
var colore=prompt("inserisci il proprio colore preferito:");
// scrivi sulla pagina nomecognomecolorepreferito19
var password=nome + cognome + colore + "19";
document.getElementById('password').innerHTML="la password generata è: " + password;
