$(document).ready(function(){
    var d = new Date();
    $("#fecha span").eq(0).html("Numero de factura: "+d.getFullYear()+"-"+Math.floor(Math.random() * 10000));
    $("#fecha span").eq(1).html("Fecha factura: "+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
});