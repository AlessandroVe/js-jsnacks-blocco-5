/* Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10 */

var palla = {
    nome : "palla",
    peso : 10
}

console.log(palla);

/* Snack1. - la continua.
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. */

palla.peso =parseInt(prompt("modificare il peso della palla"));

console.log(palla);

/* Snack 1. - la vendetta.
Inserire  l’oggetto palla in una array var giochi = []; */

var giochi = []

giochi.push(palla);

console.log(giochi);

/* Snack 1 - la conclusione per davvero.
Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi */
var nome1 = prompt("inserire il nome un nuovo oggetto") 
var peso1 = parseint(prompt("inserire il peso"))

var gioco0={
    nome : nome1,
    peso : peso1
}
giochi.push(gioco1);
