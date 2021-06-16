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