$(document).ready(function() {
    cargarTabla();
    $("button").eq(2).on("click", function() {
        agregar();
    })
    $("button").eq(1).on("click", function() { $(location).attr('href', "eliminar.html") })
    $("button").eq(0).on("click", function() { $(location).attr('href', "index.html"); })
    $("input").eq(0).on("click", function() { $("input").eq(0).val(generarID()) })
});

function generarID() {
    var id = Math.floor(Math.random() * 9) + "" + String.fromCharCode(Math.random() * (90 - 65) + 65) + "" + Math.floor(Math.random() * 9) + "" + String.fromCharCode(Math.random() * (90 - 65) + 65);
    if (localStorage.getItem(id) != null) {
        generarID();
    }
    return id;
}

function agregar() {
    if ($("input").eq(0).val() != "" && $("input").eq(1).val() != "" && $("input").eq(2).val() != "" && $("input").eq(3).val() != "") {
        if (localStorage.getItem($("input").eq(0).val()) != null) {
            alert("El id introducido ya existe.");
        } else {
            var json = {
                id: $("input").eq(0).val(),
                nombre: $("input").eq(1).val(),
                apellido: $("input").eq(2).val(),
                email: $("input").eq(3).val()
            }
            localStorage.setItem($("input").eq(0).val(), JSON.stringify(json));
            $(location).attr('href', "agregar.html");
        }
    } else {
        alert("Los campos no pueden estar vacios.");
    }

}