$(document).ready(function(){
    var imponibleArray = [];
    var ivaArray = [];
    var d = new Date();
    $("#fecha span").eq(0).html("Numero de factura: "+d.getFullYear()+"-"+Math.floor(Math.random() * 10000));
    $("#fecha span").eq(1).html("Fecha factura: "+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());

    $("button").on("click", function(){
        var concepto = $("input").eq(0).val();
        var precio = $("input").eq(1).val();
        var cantidad = $("input").eq(2).val();

        if(concepto != "" && precio != "" && cantidad != "" && parseFloat(precio) > 0 && parseInt(cantidad) > 0){
            var tr = document.createElement("tr");
            var imponible = (parseFloat(precio)*parseInt(cantidad));
            var iva = "21% "+((imponible * 24)/100)+"€";
            imponibleArray.push(imponible);
            ivaArray.push((imponible * 24)/100);
            var td =`
                <td>${concepto}</td>
                <td>${cantidad+" x "+precio+"€"}</td>
                <td>${imponible+"€"}</td>
                <td>${iva}</td>
            `;
            tr.innerHTML = td;
            $("tbody").prepend(tr);
            setTotal(imponibleArray,ivaArray);
        }else{
            alert("Introduce los compos necesarios de la factura.");
        }
    });
});
function setTotal(imponible, iva){
    var span = $("tr td span");
    var tImponible = totalImponible(imponible);
    var tIva = totalIva(iva);
    var retencion = (tImponible * 15)/100;
    var total = (tImponible + tIva)-retencion;

    span.eq(0).html(tImponible.toFixed(2)+" €");
    span.eq(1).html(tIva.toFixed(2)+" €");
    span.eq(2).html("-"+retencion.toFixed(2)+" €");
    span.eq(3).html(total.toFixed(2)+" €");
}

function totalImponible(array){
    var total = 0;
    array.forEach(e => {
        total += e;
    });
    return total;
}

function totalIva(array){
    var total = 0;
    array.forEach(e => {
        total += e;
    });
    return total;
}
