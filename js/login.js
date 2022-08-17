let URL_INDEX  = "home.html"


document.addEventListener('DOMContentLoaded', function () {
    
    let Form = document.getElementById('loginform');
    Form.addEventListener('submit', function (event) {
    
    // alert('Cliqueaste el botón');
    event.preventDefault();
    // window.open("home.html", "_self");
    window.location.href = URL_INDEX
    
    })
    
    });