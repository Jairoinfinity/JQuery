$(document).ready(function() {
    cargarTabla();
    $("button").eq(1).on("click", function() { $(location).attr('href', "eliminar.html") })
    $("button").eq(0).on("click", function() { $(location).attr('href', "agregar.html") })
    var nun = 1;
    $("button").eq(2).on("click", function() { 
        nun++;
            if(nun == 1){
                $("span").html("Nombre");
            }else if(nun == 2){
                $("span").html("Apellidos");
            }else if(nun == 3){
                $("span").html("Email");
            }else{
                nun = 0;
                $("span").html("ID");
            }
    });

    /*$("input").on("keyup", function() {
        var texto = $(this).val().toLowerCase();
        $("tr").not(":first").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(texto) > -1);
        });
    });
    $("input").on("keyup", function() {
        var texto = $(this).val().toLowerCase();
        $("tr>td").eq(1).filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(texto) > -1);
        });
    });*/

    $("input").on("keyup", function() {
        var texto = $(this).val().toLowerCase();
        
        $("tr").each(function (e){
            if(e != 0){
                if($(this).find("td").eq(nun).text().toLowerCase().indexOf(texto) != 0){
                    $(this).hide();
                }else{
                    $(this).show();
                }
            }
        })
    });
});