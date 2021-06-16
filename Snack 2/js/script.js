/* Snack 2
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area e stampare il risultato con console.log */
document.addEventListener("DOMContentLoaded", function(){
    var triangolorettangolo={
        base : 15,
        altezza : 20,
    }
    console.log("l'area del triangolo e' di " + (triangolorettangolo.base*triangolorettangolo.altezza)/2);

    var i= Math.sqrt( Math.pow(triangolorettangolo.base,2) + (Math.pow(triangolorettangolo.height,2) ));
    
    console.log("il perimetro del triangolo e' di "+ i + triangolorettangolo.base + triangolorettangolo.height )

})
