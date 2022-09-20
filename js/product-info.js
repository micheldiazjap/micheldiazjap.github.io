
let infoProd = localStorage.getItem("infoID");
let prodInfoURL = "https://japceibal.github.io/emercado-api/products/" + infoProd + ".json"
let comProdURL = "https://japceibal.github.io/emercado-api/products_comments/" + infoProd + ".json"
let infoArray = []


//console.log(infoProd)
function setRelaID(id) {
    localStorage.setItem("infoID", id);
    window.location = "product-info.html"
}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(prodInfoURL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            infoArray = resultObj.data

            htmlContentToAppend =
                `
            <div id="${infoArray.id}" class="list-group-item ">
                <div class="row"> 
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h3 class="mb-1">${infoArray.name} </h3>
                        </div>
                        <h4 class="mb-1">Precio: $${infoArray.cost}</h4>
                        <p class="mb-1">Categoria: ${infoArray.category}</p>
                        <p class="mb-1">Descripcion: ${infoArray.description}</p>
                        <p class="mb-1">Cantidad de vendidos: ${infoArray.soldCount} unidades</p>
                    </div>
                    
                </div>
                <div class="col-2 d-flex">
                         <img src="${infoArray.images[0]}" class="img-thumbnail"> 
                         <img src="${infoArray.images[1]}" class="img-thumbnail">
                         <img src="${infoArray.images[2]}" class="img-thumbnail">
                         <img src="${infoArray.images[3]}" class="img-thumbnail">
                </div>
            </div>
            `
            document.getElementById("container").innerHTML = htmlContentToAppend;

        }

    });

    getJSONData(comProdURL).then(function (data) {
        if (data.status === "ok") {
            comeArray = data.data
             //console.log(comeArray)
             let comentarios=""

             for (let com of comeArray){

                comentarios += `
                                 
                                <div class="list-group-item">
                                    <p> ${com.user}</p> 
                                    <p> ${com.description}</p>                    
                `
                for(let i=0;i<com.score;i++){

                    comentarios+= `<span class="fa fa-star checked"></span>`
                }

                   comentarios+= `<br></br><small class="text-muted">Fecha: ${com.dateTime}</small>
                   </div>`

            }

            //agrega comentario nuevo
            document.addEventListener("submit", function(e){
                e.preventDefault()
                 var puntaje = document.getElementById("punt").value;
                 var comentario = document.getElementById("coment").value;
                 var com=""

                 com+=`          
                                <div class="list-group-item list-group-item-action">
                                    <p> ${comentario}</p>                    
                `
                for(let i=0;i<puntaje;i++){

                    com+= `<span class="fa fa-star checked"></span>`
                }

                   com+= `<br></br><small class="text-muted">Fecha:${Date()}</small>
                   <div id="nuevoCom"></div>
                   </div>`

                   document.getElementById("nuevoCom").innerHTML = com;
            });
            

            //console.log(comentarios)
            document.getElementById("comentarios").innerHTML = comentarios;



        }

    });

    
    

    getJSONData(prodInfoURL).then(function (data) {
        
        if (data.status === "ok") {
            let relaArray = data.data.relatedProducts
             console.log(relaArray)
             
           
             htmlContentToAppend =
             `
             <div class="card-group w-50">
             <div class="card h-100 cursor-active" onclick="setRelaID(${relaArray[0].id})" id="${relaArray[0].id}">
               <img src=${relaArray[0].image} class="card-img-top">
               <div class="card-body">
                 <h3 class="card-title">${relaArray[0].name}</h3>
               </div>
             </div>
             <div class="card h-100 cursor-active" onclick="setRelaID(${relaArray[1].id})" id="${relaArray[1].id}">
               <img src=${relaArray[1].image} class="card-img-top">
               <div class="card-body">
                 <h3 class="card-title">${relaArray[1].name}</h3>
               </div>
             </div>
            </div>

             `
             
            document.getElementById("relacionados").innerHTML = htmlContentToAppend;

             
        }

     });
    
    
});
