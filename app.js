const express = require('express');
const app = express();
let cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended:false})); // parsear el body de las peticiones hechas con formularios
app.listen(3000);


app.get('/cart', function (peticion, respuesta) {
   
     respuesta.sendFile('./apis/cart/buy.json', {root: __dirname});
});

app.get('/cats', function (peticion, respuesta) {
   
    respuesta.sendFile('./apis/cats/cat.json', {root: __dirname});
});


app.get('/apis/cats_products/:id', (peticion, respuesta) => {
    let id = peticion.params.id;
    respuesta.sendFile(`./apis/cats_products/${id}.json`, {root: __dirname});
});

app.get('/apis/products/:id', function (peticion, respuesta) {
    let id = peticion.params.id;
    respuesta.sendFile(`./apis/products/${id}.json`, {root: __dirname});
});

app.get('/apis/products_comments/:id', function (peticion, respuesta) {
    let id = peticion.params.id;
    respuesta.sendFile(`./apis/products_comments/${id}.json`, {root: __dirname});
});

app.get('/sell', function (peticion, respuesta) {
   
    respuesta.sendFile('./apis/sell/publish.json', {root: __dirname});
});


app.get('/user_cart', function (peticion, respuesta) {
   respuesta.sendFile('./apis/user_cart/25801.json', {root: __dirname});
});