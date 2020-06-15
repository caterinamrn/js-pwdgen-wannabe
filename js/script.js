// chiedo all'utente il suo nome
var nome=prompt("inserire il proprio nome:");
// poi chiedi il suo cognome
var cognome=prompt("inserire il proprio cognome:");
// chiedi il suo colore preferito
var colore=prompt("inserire il proprio colore preferito:");
// creare la password nomecognomecolorepreferito19
var password=nome + cognome + colore + "19";
// output in pagina :scrivi sulla pagina nomecognomecolorepreferito19
document.getElementById('password').innerHTML="la password generata è: " + password;
// uso console
console.log("La password è stata generata con i dati inseriti");
