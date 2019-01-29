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
}