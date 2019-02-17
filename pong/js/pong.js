$(document).ready(function() {
    var boton = $("#boton");
    boton.click(function() {
        boton.hide();
        iniciar();
    });
});

function iniciar() {
    $("#rotulo").html("");
    var tabla = $("#tablero");
    var partida = true;
    var bto = true;
    var velocidad = 100;
    var bola = $("#bola");
    var mira = $("#pala");

    bola.click(function() {
        partida = false;
    });


    tabla.mousemove(function(e) {
        //mira.css({ "top": (event.clientY - 40), "left": (event.clientX - 470) });
        //Movimiento de la bola

        var y = Math.floor(Math.random() * (479 - 9) + 9) + "px";
        var x = Math.floor(Math.random() * (979 - 0) + 0) + "px";


        if (partida) {
            bola.animate({
                left: x,
                top: y
            }, velocidad);
        } else {
            $("#rotulo").html("Ganaste!!!");
            if (bto) {
                $("#boton").show();
                bto = false;
            }
        }
    });

    tabla.mouseenter(function() {
        /*tabla.css("cursor", "none");*/
    });



}