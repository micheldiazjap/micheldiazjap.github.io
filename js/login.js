const URL_INDEX = "home.html"
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
            window.location.href = URL_INDEX
            localStorage.setItem('usuario',user.value);
        }
        else {
            document.getElementById("alert").innerHTML = "Debe completar los campos vacios!"
            // alert("debeingresar los campos")
        }
    })
});



function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);


}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "627386899527-8lvb5bl5oid593ake3oda12a9pmb2ati.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}
