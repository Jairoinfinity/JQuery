$(document).ready(function(){
    var d = new Date();
    $("#fecha span").eq(0).html("Numero de factura: "+d.getFullYear()+"-"+Math.floor(Math.random() * 10000));
    $("#fecha span").eq(1).html("Fecha factura: "+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());

    $("button").on("click", function(){
        var concepto = $("input").eq(0).val();
        var precio = $("input").eq(1).val();
        var cantidad = $("input").eq(2).val();

        if(concepto != "" && precio != "" && cantidad != ""){
            var tr = document.createElement("tr");
            var imponible = (parseFloat(precio)*parseInt(cantidad));
            var iva = "21% "+((imponible * 24)/100)+"€";
            var td =`
                <td>${concepto}</td>
                <td>${cantidad+" x "+precio+"€"}</td>
                <td>${imponible+"€"}</td>
                <td>${iva}</td>
            `;
            tr.innerHTML = td;
            $("tbody").prepend(tr);
        }else{
            alert("Introduce los compos necesarios de la factura.");
        }
    });
});