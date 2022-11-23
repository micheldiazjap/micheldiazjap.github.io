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
function handleCredentialResponse(response) {
     // decodeJwtResponse() is a custom function defined by you
     // to decode the credential response.
     const responsePayload = decodeJwtResponse(response.credential);

     console.log("ID: " + responsePayload.sub);
     console.log('Full Name: ' + responsePayload.name);
     console.log('Given Name: ' + responsePayload.given_name);
     console.log('Family Name: ' + responsePayload.family_name);
     console.log("Image URL: " + responsePayload.picture);
     console.log("Email: " + responsePayload.email);
  }
