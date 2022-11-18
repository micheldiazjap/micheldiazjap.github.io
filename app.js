const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false})); // parsear el body de las peticiones hechas con formularios
app.listen(3000);

app.get('/', function (peticion, respuesta) {
    respuesta.sendFile('./views/index.html', {root: __dirname});
});