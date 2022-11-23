const URL_INDEX = "index.html"
const user = document.getElementById("usuario")
const cont = document.getElementById("pass")
const Form = document.getElementById('loginform');


function validarNombre(user, cont) {

    if (user.value === "" || cont.value === "") {
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

            //guarda el usuario en localStorage
            localStorage.setItem('usuario',user.value);
            window.location.href = URL_INDEX
           
        }
        else {
            document.getElementById("alert").innerHTML = "Debe completar los campos vacios!"
            
        }
    })
});
