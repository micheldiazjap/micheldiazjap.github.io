const CATEGORIES_URL = "http://localhost:3000/cats";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/sell";
const PRODUCTS_URL = "http://localhost:3000/apis/cats_products/";
const PRODUCT_INFO_URL = "http://localhost:3000/apis/products/";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3000/apis/products_comments/";
const CART_INFO_URL = "http://localhost:3000/user_cart/";
const CART_BUY_URL = "http://localhost:3000/apis/cart";
const EXT_TYPE = ".json";

let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

//redirecciona si no hay usuario logueado y si existe lo coloca en el html
document.addEventListener('DOMContentLoaded', function () {

  let usuario = localStorage.getItem('usuario');

  if (usuario === null) {

    window.location.href = "login.html"
  }

  document.getElementById("usuario").innerHTML = usuario

    
  let botDesc = document.getElementById("desconectar");
  botDesc.addEventListener("click",function(){
  localStorage.clear("usuario");
  window.location.href = "login.html"
  });

});