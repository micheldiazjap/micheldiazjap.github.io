const CARRITO_URL = "https://japceibal.github.io/emercado-api/user_cart/25801.json"

fetch(CARRITO_URL)
        .then(response => response.json())
        .then(datos => {
                console.log(datos)


                //usuario dado por pauta
                document.getElementById("contenedor").innerHTML = `
                                                <table class="default">
                                                        <tr>
                                                                <td></td>
                                                                <td class="fw-bold">Nombre</td>
                                                                <td class="fw-bold">Costo</td>
                                                                <td class="fw-bold">Cantidad</td>
                                                                <td class="fw-bold">Subtotal</td>
                                                        </tr>
                                                        
                                                        <tr>
                                                                <td class="col-lg-2"><img src="${datos.articles[0].image}" class="col-lg-8"></img></td>
                                                                <td>${datos.articles[0].name}</td>
                                                                <td>${datos.articles[0].currency} ${datos.articles[0].unitCost}</td>
                                                                <td><input type="number" id="costo" value=1></input></td>
                                                                <td><p id="precio">$ ${datos.articles[0].unitCost}</p></td>
                                                        </tr>
                                                </table>

`
                costoValue = document.getElementById("costo")
                costoValue.addEventListener("input", function () {
                var costo = document.getElementById("costo").value
                document.getElementById("precio").innerHTML = `$${(costo * datos.articles[0].unitCost)}`

                })


                
                let infoCart = localStorage.getItem("infoID");
                let prodInfoURL = "https://japceibal.github.io/emercado-api/products/" + infoCart + ".json"

                //articulo desde boton comprar
                getJSONData(prodInfoURL).then(function (resultObj) {
                        if (resultObj.status === "ok") {
                                infoArray = resultObj.data
                                let arrayLista = [];

                                // if (localStorage.getItem("cartID") != null) {
                                //         arrayLista = JSON.parse(localStorage.getItem('cartID'))
                                // };

                                if (localStorage.getItem('cartID') != null) {
                                        let mostrarItem = JSON.parse(localStorage.getItem('cartID'));
                                        document.getElementById("contenedor2").innerHTML = ""
                                        let contenedor = document.getElementById('contenedor2');

                                        for (elemento of mostrarItem) {
                                                let arrayInfoURL = "https://japceibal.github.io/emercado-api/products/" + elemento + ".json"
                                                
                                                getJSONData(arrayInfoURL).then(function (resultObj) {
                                                       
                                                        if (resultObj.status === "ok") {
                                                                infoArray = resultObj.data
                                                                console.log(infoArray)
                                                                document.getElementById("contenedor2").innerHTML += `
                        <table class="default">
                                <tr>
                                        <td></td>
                                        <td>Nombre</td>
                                        <td>Costo</td>
                                        <td>Cantidad</td>
                                        <td>Subtotal</td>
                                </tr>
                                
                                <tr>
                                        <td class="col-lg-2"><img src="${infoArray.images[0]}" class="col-lg-8"></img></td>
                                        <td>${infoArray.name}</td>
                                        <td>${infoArray.currency} ${infoArray.cost}</td>
                                        <td><input type="number" id="costo2" value=1></input></td>
                                        <td><p id="precio2">$ ${infoArray.cost}</p></td>
                                </tr>
                        </table>

`
                                                                costoValue = document.getElementById("costo2")
                                                                costoValue.addEventListener("keyup", function () {
                                                                 var costo = document.getElementById("costo2").value
                                                                 document.getElementById("precio2").innerHTML = `$${(costo * infoArray.cost)}`


                                                                })
                                                        }

                                                })

                                        }
                                }




                        }
                })
        });