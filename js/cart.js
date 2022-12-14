

fetch(CART_INFO_URL)
        .then(response => response.json())
        .then(datos => {


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
                                                                <td><input type="number" id="costo" min="1" onkeypress="return event.charCode >= 48" pattern="^[1-9]\d*$" value=1></input></td>
                                                                <td><p id="precio">${datos.articles[0].currency} ${datos.articles[0].unitCost}</p></td>
                                                        </tr>
                                                </table>

`


                let costoValue = document.getElementById("costo");
                let premium = document.getElementById("premium");
                let express = document.getElementById("express");
                let standar = document.getElementById("standar");
                let moneda = datos.articles[0].currency
                document.getElementById("subtotal").innerHTML = `USD${datos.articles[0].unitCost}`
                document.getElementById("costoEnvio").innerHTML = `USD${(datos.articles[0].unitCost / 100 * 15 * costoValue.value)}`
                document.getElementById("total").innerHTML = `USD${(datos.articles[0].unitCost / 100 * 15 * costoValue.value + costoValue.value * datos.articles[0].unitCost)}`

                function calculoSubtotal() {
                        var costo = document.getElementById("costo").value
                        if (moneda != "USD") {

                                document.getElementById("precio").innerHTML = `${datos.articles[0].currency}${(costo * (datos.articles[0].unitCost * 41))}`
                                document.getElementById("subtotal").innerHTML = `USD${(costo * (datos.articles[0].unitCost * 41))}`

                                if (premium.checked) {
                                        document.getElementById("costoEnvio").innerHTML = `USD${((datos.articles[0].unitCost * 41) / 100 * 15 * costo)}`
                                        document.getElementById("total").innerHTML = `USD${((datos.articles[0].unitCost * 41) / 100 * 15 * costo + costo * (datos.articles[0].unitCost * 41))}`

                                }
                                else if (express.checked) {
                                        document.getElementById("costoEnvio").innerHTML = `USD${((datos.articles[0].unitCost * 41) / 100 * 7 * costo)}`
                                        document.getElementById("total").innerHTML = `USD${((datos.articles[0].unitCost * 41) / 100 * 7 * costo + costo * (datos.articles[0].unitCost * 41))}`

                                }
                                else if (standar.checked) {
                                        document.getElementById("costoEnvio").innerHTML = `USD${((datos.articles[0].unitCost * 41) / 100 * 5 * costo)}`
                                        document.getElementById("total").innerHTML = `USD${((datos.articles[0].unitCost * 41) / 100 * 5 * costo + costo * (datos.articles[0].unitCost * 41))}`
                                }

                        }
                        else {
                                document.getElementById("precio").innerHTML = `${datos.articles[0].currency}${(costo * datos.articles[0].unitCost)}`
                                document.getElementById("subtotal").innerHTML = `USD${(costo * datos.articles[0].unitCost)}`

                                if (premium.checked) {
                                        document.getElementById("costoEnvio").innerHTML = `USD${(datos.articles[0].unitCost / 100 * 15 * costo)}`
                                        document.getElementById("total").innerHTML = `USD${(datos.articles[0].unitCost / 100 * 15 * costo + costo * datos.articles[0].unitCost)}`

                                }
                                else if (express.checked) {
                                        document.getElementById("costoEnvio").innerHTML = `USD${(datos.articles[0].unitCost / 100 * 7 * costo)}`
                                        document.getElementById("total").innerHTML = `USD${(datos.articles[0].unitCost / 100 * 7 * costo + costo * datos.articles[0].unitCost)}`

                                }
                                else if (standar.checked) {
                                        document.getElementById("costoEnvio").innerHTML = `USD${(datos.articles[0].unitCost / 100 * 5 * costo)}`
                                        document.getElementById("total").innerHTML = `USD${(datos.articles[0].unitCost / 100 * 5 * costo + costo * datos.articles[0].unitCost)}`
                                }
                        }
                }


                costoValue.addEventListener("input", function calculartotal() {
                        calculoSubtotal()
                })
                premium.addEventListener("change", function () {
                        calculoSubtotal()
                });
                express.addEventListener("change", function () {
                        calculoSubtotal()
                });
                standar.addEventListener("change", function () {
                        calculoSubtotal()
                });

                let pagoTarjeta = document.getElementById("tarjetaCredito");
                let pagoBancario = document.getElementById("transBancaria");

                pagoTarjeta.addEventListener("change", function () {

                        document.getElementById("numeCuenta").disabled = true
                        document.getElementById("numTarjeta").disabled = false
                        document.getElementById("codSeg").disabled = false
                        document.getElementById("venc").disabled = false
                        document.getElementById("numeCuenta").value = ""

                })
                pagoBancario.addEventListener("change", function () {

                        document.getElementById("numeCuenta").disabled = false
                        document.getElementById("numTarjeta").disabled = true
                        document.getElementById("codSeg").disabled = true
                        document.getElementById("venc").disabled = true
                        document.getElementById("numTarjeta").value = ""
                        document.getElementById("codSeg").value = ""
                        document.getElementById("venc").value = ""


                })


                document.getElementById("formEnvio").addEventListener("submit", function (e) {
                        

                        let calle = document.getElementById("calle");
                        let numero = document.getElementById("numero");
                        let esquina = document.getElementById("esquina");
                        if (calle.value === "") {
                                e.preventDefault();
                                document.getElementById("alertaCalle").innerHTML = `<p class="text-danger">El campo calle debe estar completo!</p>`
                        }
                        else {
                                document.getElementById("alertaCalle").innerHTML = ``
                        }
                        if (numero.value === "") {
                                e.preventDefault();
                                document.getElementById("alertaNumero").innerHTML = `<p class="text-danger">El campo numero debe estar completo!</p>`
                        }
                        else {
                                document.getElementById("alertaNumero").innerHTML = ``
                        }
                        if (esquina.value === "") {
                                e.preventDefault();
                                document.getElementById("alertaEsquina").innerHTML = `<p class="text-danger">El campo esquina debe estar completo!</p>`
                        }
                        else {
                                document.getElementById("alertaEsquina").innerHTML = ``
                        }




                        let pagoTarjeta = document.getElementById("tarjetaCredito");
                        let pagoBancario = document.getElementById("transBancaria");
                        let numCuenta = document.getElementById("numeCuenta");
                        let numtarjeta = document.getElementById("numTarjeta");
                        let codSeg = document.getElementById("codSeg");
                        let venc = document.getElementById("venc");



                        if (!pagoTarjeta.checked && !pagoBancario.checked) {
                                e.preventDefault();
                                document.getElementById("alertaPago").innerHTML = `<p class="text-danger">Debe seleccionar una forma de pago!</p>`
                        }
                        else {
                                e.preventDefault();
                                document.getElementById("alertaPago").innerHTML = `<p class="text-success">HAS COMPRADO CON EXITO!</p>`
                        }

                        if (numCuenta.value === "" && pagoBancario.checked) {
                                e.preventDefault();
                                document.getElementById("alertaPago").innerHTML = `<p class="text-danger">Debe completar los datos de pago!</p>`
                        }
                        else if ((numtarjeta.value === "" || codSeg.value === "" || venc.value === "") && pagoTarjeta.checked) {
                                e.preventDefault();
                                document.getElementById("alertaPago").innerHTML = `<p class="text-danger">Debe completar los datos de pago!</p>`
                        }


                })
        });



