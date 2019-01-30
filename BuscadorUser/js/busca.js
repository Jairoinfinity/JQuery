$(document).ready(function() {
    cargarTabla();
    $("button").eq(1).on("click", function() { $(location).attr('href', "eliminar.html") })
    $("button").eq(0).on("click", function() { $(location).attr('href', "agregar.html"); })
    var nun = 1;
    /*$("input").on("keyup", function() {
        var texto = $(this).val().toLowerCase();
        $("tr").not(":first").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(texto) > -1);
        });
    });*/
    $("input").on("keyup", function() {
        var texto = $(this).val().toLowerCase();
        $("tr>td").eq(1).filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(texto) > -1);
        });
    });
});