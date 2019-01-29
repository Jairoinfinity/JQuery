$(document).ready(function() {
    cargarTabla();
    $("button").eq(1).on("click", function() { $(location).attr('href', "eliminar.html") })
    $("button").eq(0).on("click", function() { $(location).attr('href', "agregar.html"); })
});