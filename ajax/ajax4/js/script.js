$(document).ready(function(){
    var sec = $("section");
    $("#botonCiclos").click(function(){
        $.get("ciclos.html", function(res){
            sec.html(res);
        });
    });

    $("#botonSalidas").click(function(){
        $.get("salidas.html", function(res){
            sec.html(res);
        });
    });

    $("#botonOtros").click(function(){
        $.get("otros.html", function(res){
            sec.html(res);
        });
    });

    var num=0;
    $(document).keydown(function(e){
        
        if(e.key == "ArrowRight"){
            if(num == 2){
                num=2;
            }else{
                num++;
            }
        }

        if(e.key == "ArrowLeft"){
            if(num > 0){
                num--;
            }
        }

        switch(num){
            case 0:
                $.get("ciclos.html", function(res){
                    sec.html(res);
                });
                break;
            case 1:
                $.get("salidas.html", function(res){
                    sec.html(res);
                });
                break;
            case 2:
                $.get("otros.html", function(res){
                    sec.html(res);
                });
                break;

        }
    })
});