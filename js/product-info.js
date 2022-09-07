const prodInfoURL = "https://japceibal.github.io/emercado-api/products/50741.json"
const comProdURL ="https://japceibal.github.io/emercado-api/products_comments/50741.json"
let infoArray = []


getJSONData(prodInfoURL).then(function (resultObj) {
    if (resultObj.status === "ok") {
        infoArray = resultObj.data


        htmlContentToAppend =
            `
            <div id=${infoArray.id} class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${infoArray.name} ${infoArray.cost}</h4>
                            <small class="text-muted">${infoArray.soldCount} artículos vendidos</small>
                        </div>
                        <p class="mb-1" >Categoria: ${infoArray.category}</p>
                        <p class="mb-1">${infoArray.description}</p>
                    </div>
                    
                </div>
                <div class="col-2 d-flex">
                         <img src="${infoArray.images[0]}"  class="img-thumbnail"> 
                         <img src="${infoArray.images[1]}" class="img-thumbnail">
                         <img src="${infoArray.images[2]}"  class="img-thumbnail">
                         <img src="${infoArray.images[3]}"  class="img-thumbnail">
                </div>
            </div>
            `

        document.getElementById("container").innerHTML = htmlContentToAppend;



    }

});

