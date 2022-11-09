document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("email").value = localStorage.getItem('usuario');

    let botonGuardar = document.getElementById("guardar")

    if (localStorage.getItem("ArrayDatos") != null) {

        let arrayParacargar = JSON.parse(localStorage.getItem('ArrayDatos'))

        document.getElementById("nombre").value = arrayParacargar[0]
        document.getElementById("apellido").value = arrayParacargar[1]
        document.getElementById("segundoNombre").value = arrayParacargar[2]
        document.getElementById("segundoApellido").value = arrayParacargar[3]
        document.getElementById("email").value = arrayParacargar[4]
        document.getElementById("telefono").value = arrayParacargar[5]

    };

    //guarda y respalda en localstorage
    botonGuardar.addEventListener('click', function (e) {

        let arrayDatos = [];
        let nombre = document.getElementById("nombre").value
        let apellido = document.getElementById("apellido").value
        let segundoNombre = document.getElementById("segundoNombre").value
        let segundoApellido = document.getElementById("segundoApellido").value
        let email = document.getElementById("email").value
        let telefono = document.getElementById("telefono").value

        if (nombre != "") {

            arrayDatos.splice(0, 0, document.getElementById("nombre").value)
        }
        else {
            arrayDatos.splice(0, 0, document.getElementById("nombre").value)
        }
        if (apellido != "") {
            arrayDatos.splice(1, 0, document.getElementById("apellido").value)
        }
        else {
            arrayDatos.splice(1, 0, document.getElementById("apellido").value)
        }
        if (segundoNombre != "") {
            arrayDatos.splice(2, 0, document.getElementById("segundoNombre").value)
        }
        else {
            arrayDatos.splice(2, 0, document.getElementById("segundoNombre").value)
        }
        if (segundoApellido != "") {
            arrayDatos.splice(3, 0, document.getElementById("segundoApellido").value)
        }
        else {
            arrayDatos.splice(3, 0, document.getElementById("segundoApellido").value)
        }
        if (email != "") {
            arrayDatos.splice(4, 0, document.getElementById("email").value)
        }
        else {
            arrayDatos.splice(4, 0, document.getElementById("email").value)
        }
        if (telefono != "") {
            arrayDatos.splice(5, 0, document.getElementById("telefono").value)
        }
        else {
            arrayDatos.splice(5, 0, document.getElementById("telefono").value)
        }
        localStorage.setItem('ArrayDatos', JSON.stringify(arrayDatos));
        console.log(arrayDatos)
        
    })
});
