const URL_INDEX = "home.html"
const user = document.getElementById("usuario")
const cont = document.getElementById("pass")
const Form = document.getElementById('loginform');


function validarNombre(user, cont) {

    if (user.value === "" && cont.value === "") {
        return false;
    }
    else {
        return true;
    }

}

document.addEventListener('DOMContentLoaded', function () {

    Form.addEventListener('submit', function (event) {

        event.preventDefault();
        if (validarNombre(user, cont)) {

            window.location.href = URL_INDEX
        }
        else {

            document.getElementById("alert").innerHTML = "debe completar los campos vacios!"

            // alert("debeingresar los campos")
        }


    })

});
