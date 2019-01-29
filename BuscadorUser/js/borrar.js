$(document).ready(function() {
    cargarTabla();
    $("button").eq(0).on("click", function() { $(location).attr('href', "index.html") });
    $("button").eq(1).on("click", function() { $(location).attr('href', "agregar.html"); });
    $("button").eq(2).on("click", function() { borrar() });
});

function borrar() {
    if ($("input").eq(0).val() != "") {
        localStorage.removeItem($("input").val());
        $(location).attr('href', "eliminar.html");

    } else {
        alert("No se ha introducido ninguna id.");
    }

}