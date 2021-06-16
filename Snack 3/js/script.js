/* Snack 3 - 1^ parte.
Creare un array con tre numeri, calcolare la media di questi tre numeri. */
document.addEventListener("DOMContentLoaded", function() {


var numbers=[4,5,8];
    var sum = 0;
    for(var x = 0; x < numbers.length; x++){
        sum += numbers[x];
    }
    var media = sum / numbers.length;

    console.log("la media e':" + media);



/* Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
nome
cognome
anno
punteggio
Calcolare il punteggio medio dei tre giocatori. */

var giocatore = document.getElementsByClassName("giocatore");

var giocatori =[
    {
        nome : "Mario",
        cognome : "Rossi",
        anno : 1995,
        punteggio : 15
    },

    {
        nome : "Andrea",
        cognome : "Rossi",
        anno : 1995,
        punteggio : 15
    },

    {
        nome : "Filippo",
        cognome : "Rossi",
        anno : 1995,
        punteggio : 15
    }
]

console.log(giocatori);

var sum = 0;

for(var x=0 ; x < giocatori.length ; x++){
    sum  += giocatori[x].punteggio;
}

var media = sum /giocatori.length;

console.log("la media del punteggio dei giocatori  e':" + media);




for(x=0; x<giocatori.length ; x++){

    for(var key in giocatori[x]){
        giocatore[x].innerHTML += "<li>" + key + ":" + giocatori[x][key] + "</li>";
    }
    
    
}
})