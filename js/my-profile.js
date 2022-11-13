
document.addEventListener('DOMContentLoaded', function () {


    document.getElementById("email").value = localStorage.getItem('usuario');
    let imagenReciente = localStorage.getItem("imagenReciente")
    if (imagenReciente) {
        document.querySelector("img").setAttribute("src", imagenReciente)
    }

    let foto = document.getElementById("foto");

    foto.addEventListener("change", function () {
        const lector = new FileReader();
        lector.addEventListener("load", () => {
            localStorage.setItem("imagenReciente", lector.result);

        })
        lector.readAsDataURL(this.files[0]);

    })

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
        let alerta = document.getElementById("alerta");
        let imagenReciente = localStorage.getItem("imagenReciente")
        if (imagenReciente) {
            document.querySelector("img").setAttribute("src", imagenReciente)
        }
        if (nombre != "") {

            arrayDatos.splice(0, 0, document.getElementById("nombre").value)
        }
        else {
            alerta.innerHTML = `<p class="text-danger">Debe completar los datos marcados!</p>`
        }
        if (apellido != "") {
            arrayDatos.splice(1, 0, document.getElementById("apellido").value)
        }
        else {
            alerta.innerHTML = `<p class="text-danger">Debe completar los datos marcados!</p>`
        }
        if (email != "") {
            arrayDatos.splice(4, 0, document.getElementById("email").value)
        }
        else {
            alerta.innerHTML = `<p class="text-danger">Debe completar los datos marcados!</p>`
        }

        arrayDatos.splice(2, 0, segundoNombre)

        arrayDatos.splice(3, 0, segundoApellido)

        arrayDatos.splice(5, 0, telefono)

        localStorage.setItem('ArrayDatos', JSON.stringify(arrayDatos));
    })
});
