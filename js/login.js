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

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send(JSON.stringify({token: id_token}));
}
require('dotenv').config()

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

// Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '627386899527-8lvb5bl5oid593ake3oda12a9pmb2ati.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);


const PORT = 7000;

// Middleware

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req,res)=>{
    res.render('login');
})

app.post('/login', (req,res)=>{
    let token = req.body.token;

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
      }
      verify()
      .then(()=>{
          res.cookie('session-token', token);
          res.send('success')
      })
      .catch(console.error);

})

app.get('/profile', checkAuthenticated, (req, res)=>{
    let user = req.user;
    res.render('profile', {user});
})

app.get('/protectedRoute', checkAuthenticated, (req,res)=>{
    res.send('This route is protected')
})

app.get('/logout', (req, res)=>{
    res.clearCookie('session-token');
    res.redirect('/login')

})


function checkAuthenticated(req, res, next){

    let token = req.cookies['session-token'];

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
      }
      verify()
      .then(()=>{
          req.user = user;
          next();
      })
      .catch(err=>{
          res.redirect('/login')
      })

}


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
