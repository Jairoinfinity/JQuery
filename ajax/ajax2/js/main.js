$(document).ready(function(){
    $.get("tabla.html", res => {$("#tabla").html(res)});
});