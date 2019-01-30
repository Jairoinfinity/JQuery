function cargarTabla() {
    for (var i in localStorage) {
        if (typeof localStorage[i] == 'string') {
            var json = JSON.parse(localStorage[i]);
            plantilla = `
            <tr>
            <td>${json.id}</td>
            <td>${json.nombre}</td>
            <td>${json.apellido}</td>
            <td>${json.email}</td>
            </tr>
            `;
            $("table").append(plantilla);
        }
    }
    añadirCss();
}

function añadirCss() {
    $("th, td").css({ "border": "1px solid gray", "padding": "10px" });
    $("table").css("borderCollapse", "collapse");
    $("tr:even").not(":first").css("backgroundColor", "#4286f4");
    $("tr").first().css({ "backgroundColor": "#8e6fed", "color": "white" });
    $("tr").not(":first").hover(function() {
        $(this).css("backgroundColor", "#7cef8d");
    }, function() {
        $(this).css("backgroundColor", "White");
        $("tr:even").not(":first").css("backgroundColor", "#4286f4");
    });
}