/* Snack 2
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area e stampare il risultato con console.log */
document.addEventListener("DOMContentLoaded", function(){
    var triangolorettangolo={
        base : 15,
        altezza : 20
    }
    var i = Math.sqrt( Math.pow(triangolorettangolo.base , 2) + Math.pow(triangolorettangolo.altezza , 2));
    console.log("questa e' l'ipotenusa " + i);
    
    var perimetro= i + triangolorettangolo.base + triangolorettangolo.altezza ;
    console.log("il perimetro del triangolo e' di "+ perimetro );
    
    var area= (triangolorettangolo.base*triangolorettangolo.altezza)/2
    console.log("l'area del triangolo e' di " + area);
})
