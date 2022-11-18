const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false})); // parsear el body de las peticiones hechas con formularios
app.listen(3000);

app.get('/cart', function (peticion, respuesta) {
   
     respuesta.sendFile('./apis/cart/buy.json', {root: __dirname});
});

app.get('/cats', function (peticion, respuesta) {
   
    respuesta.sendFile('./apis/cart/buy.json', {root: __dirname});
});

app.get('/cats_products', function (peticion, respuesta) {
   
    respuesta.sendFile('./apis/cart/buy.json', {root: __dirname});
});

app.get('/products', function (peticion, respuesta) {
   
    respuesta.sendFile('./apis/cart/buy.json', {root: __dirname});
});

app.get('/products_comments', function (peticion, respuesta) {
   
     respuesta.sendFile('./apis/cart/buy.json', {root: __dirname});
});
app.get('/sell', function (peticion, respuesta) {
   
    respuesta.sendFile('./apis/cart/buy.json', {root: __dirname});
});
app.get('/user_cart', function (peticion, respuesta) {
   respuesta.sendFile('./apis/cart/buy.json', {root: __dirname});
});