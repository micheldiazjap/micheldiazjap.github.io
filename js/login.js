let URL_INDEX  = "C:/Users/miche/Desktop/JAP/Proyecto Obligatorio/home.html"


document.addEventListener('DOMContentLoaded', function () {
    
    let Form = document.getElementById('loginform');
    Form.addEventListener('submit', function (event) {
    
    // alert('Cliqueaste el botón');
    event.preventDefault();
    window.location.href = URL_INDEX
    
    })
    
    });