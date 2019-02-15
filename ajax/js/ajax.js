$(document).ready(function() {
    $("button").click(function() {
        //Load
        //$("#datos").load("https://reqres.in/api/users?page=2");

        //Get
        $.get("https://reqres.in/api/users", { page: 2 }, function(res) {
            res.data.forEach(e => {
                $("#datos").append("<p>" + e.first_name + " " + e.last_name + "</p>");
            });
        });
    });

    $("#formulario").submit(function(e) {
        e.preventDefault();

        var name = $('input[name="name"]').val();
        var apell = $('input[name="apell"]').val();
        if (name != "" && apell != "") {
            var datos = {
                    nombre: name,
                    Apellidos: apell
                }
                //Post
                /*$.post($(this).attr("action"), datos, function(res) {
                    console.log(res);
                }).done(function() {
                    alert("Registro Realizado.");
                });*/

            //Ajax
            $.ajax({
                type: "post",
                url: "https://reqres.in/api/users",
                data: datos,
                beforeSend: function() {
                    console.log("Enviando datos.");
                },
                success: function(res) {
                    console.log(res);
                },
                error: function() {
                    console.log("Error en el envio.");
                },
                timeout: 2000
            });
        } else {
            alert("introduce todos los datos.");
        }

        return false;
    });

});