$(document).ready(function() {
    $(this).click(function() {
        var x = (event.clientX - 35) + "px";
        var y = (event.clientY - 35) + "px";
        $("#bola").animate({ left: x, top: y }, "slow");
    });
});