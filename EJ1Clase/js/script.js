$(document).ready(function(){
    jqForma();
});

function jqForma(){
    $("td, th").css({"border":"1px solid gray","padding":"10px"});
    $("table").css({"border": "1px solid gray", "borderCollapse": "collapse"});
    $("tr:even").not(":first").css("backgroundColor","lemonchiffon");
    $("tr").first().css("backgroundColor","darkkhaki");
    $("tr").not(":first").mouseenter(function(){
        $(this).css("backgroundColor","khaki")
    });
    $("tr").not(":first").mouseleave(function(){
        $(this).css("backgroundColor","white")
    });
    $("tr:even").not(":first").mouseleave(function(){
        $(this).css("backgroundColor","lemonchiffon")
    });
}



function jsForma(){
    var tr = document.querySelectorAll("tr");
    var td = document.querySelectorAll("td");
    var th = document.querySelectorAll("th");
    var table = document.querySelectorAll("table");

    td.forEach(e => e.style.border = "1px solid gray");
    th.forEach(e => e.style.border = "1px solid gray");
    td.forEach(e => e.style.padding = "10px");
    th.forEach(e => e.style.padding = "10px");
    th.forEach(e => e.style.backgroundColor = "darkkhaki");
    
    for(var i = 0; i<tr.length; i++){
        if(i%2 == 0){
            tr[i].style.backgroundColor = "lemonchiffon";
        }

        if(i != 0){
            tr[i].addEventListener("mouseenter",function () {
                this.style.backgroundColor = "khaki";
            
            });
        }

        if(i%2 == 0){
            tr[i].addEventListener("mouseout",function(){
                this.style.backgroundColor = "lemonchiffon";
            });
        }else{
            tr[i].addEventListener("mouseout",function(){
                this.style.backgroundColor = "white";
            });
        }
        
    }
    
    table.forEach(e => e.style.border = "1px solid gray");
    table.forEach(e => e.style.borderCollapse = "collapse");
}