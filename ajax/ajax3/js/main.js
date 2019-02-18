$(document).ready(function(){
    $("#boton").click(function(){
        $.get("datos.json", function(res){
            var plantilla = `
                <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Nota</th>
                        <th>Convocatoria</th>
                    </tr>
                </thead>
                <tbody>
            `;

            res.forEach(e => {
                plantilla += `
                    <tr>
                        <td>${e.nombre}</td>
                        <td>${e.apellido}</td>
                        <td>${e.nota}</td>
                        <td>${e.convocatoria}</td>
                    </tr>
                `;
            });


            plantilla += `
                </tbody>
                </table>
            `;

            $("#tabla").html(plantilla);
        });
    });
});