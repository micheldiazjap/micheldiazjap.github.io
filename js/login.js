let URL_INDEX = 'C:\Users\miche\Desktop\JAP\Proyecto Obligatorio\index.html'


document.addEventListener('DOMContentLoaded', function () {
    
    let miBoton = document.getElementById('loginform');
    miBoton.addEventListener('submit', function (event) {
   
    // alert('Cliqueaste el botón');
    event.preventDefault();
    window.open("C:/Users/miche/Desktop/JAP/Proyecto Obligatorio/index.html", "_self");
    
    })
    
    });