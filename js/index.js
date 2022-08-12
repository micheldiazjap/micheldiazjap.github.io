
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});


// document.addEventListener('DOMContentLoaded', function () {
    
//     if (localStorage.getItem("visited")) {
//         window.location.href = "C:/Users/miche/Desktop/JAP/Proyecto Obligatorio/login.html";
//     }
//     localStorage.setItem("visited", "true");

  
    
    
//     })
    