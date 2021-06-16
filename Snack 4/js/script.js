/* Snack 4 - 
Creare un array di 3 studenti 
Per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà. 
Visualizzare nell’html questi dati in una forma tabellare. */


var listaStudenti = document.getElementsByClassName("lista-studenti");
document.addEventListener("DOMContentLoaded", function() {
    //Creare un array di 3 studenti 
    var studenti=[
        {
            nome: 'Pippo',
            cognome: 'Baudo',
            age: 80,
            descrizione: ""

        },
        {
            nome: 'Francesco',
            cognome: 'Totti',
            age: 44,
            descrizione: ""

        },      
        {
            nome: 'Lorenzo',
            cognome: 'insigne',
            age: 30,
            descrizione: ""
        }
    ]
   // Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà. 
    for (var x=0; x<studenti.length ; x++){

        studenti[x].descrizione = prompt("cosa ne pensi di " +studenti[x].nome+ "?");

    } 
    console.log(studenti)
    //Visualizzare nell’html questi dati in una forma tabellare.
    for(var x=0;  x<studenti.length ; x++){
        for(var key in studenti[x]){
            listaStudenti[x].innerHTML+="<li>"+ key+ " : " + studenti[x][key]+"</li>";
        }
    }


})