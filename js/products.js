const ORDER_ASC_BY_PRICE = "09";
const ORDER_DESC_BY_PRICE = "90";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

var idProd = localStorage.getItem("catID");
let ProdURL = PRODUCTS_URL + idProd 

//acomoda los productos en orden ascendente, descendete y por costo
function sortProducts(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE) {
        result = array.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_PRICE) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_PROD_COUNT) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;

}


function setInfoID(id) {
    localStorage.setItem("infoID", id);
    window.location = "product-info.html"
}


//muestra la lista de los productos
function showProductsList() {

    let product = currentProductsArray.products
    // console.log(currentProductsArray)
    // console.log(product)
    //  console.log(idProd)
    let htmlContentToAppend = "";

    for (let i = 0; i < product.length; i++) {

        let prod = product[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(prod.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(prod.cost) <= maxCount))) {

            htmlContentToAppend += `
            <div onclick="setInfoID(${prod.id})" id="${prod.id}" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${prod.image}" alt="${prod.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${prod.name} $ ${prod.cost}</h4>
                            <small class="text-muted">${prod.soldCount} art??culos vendidos</small>
                        </div>
                        <p class="mb-1">${prod.description}</p>
                    </div>
                </div>
            </div>
            `

            document.getElementById("prod-container").innerHTML = htmlContentToAppend;
        }
    }
}

//Muestro los productos ordenados
function sortAndShowProducts(sortCriteria, ProductsArray) {
    currentSortCriteria = sortCriteria;

    if (ProductsArray != undefined) {
        currentProductsArray.products = ProductsArray;
    }

    currentProductsArray.products = sortProducts(currentSortCriteria, currentProductsArray.products);


    showProductsList();
}



//ejecuta las funciones cuando sucede un evento
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(ProdURL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            currentProductsArray = resultObj.data
            showProductsList();
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function () {
        sortAndShowProducts(ORDER_ASC_BY_PRICE);
    });

    document.getElementById("sortDesc").addEventListener("click", function () {
        sortAndShowProducts(ORDER_DESC_BY_PRICE);
    });

    document.getElementById("sortByCount").addEventListener("click", function () {
        sortAndShowProducts(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function () {
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function () {
        //Obtengo el m??nimo y m??ximo de los intervalos para filtrar por cantidad
        //de productos vendidos
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0) {
            minCount = parseInt(minCount);
        }
        else {
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
            maxCount = parseInt(maxCount);
        }
        else {
            maxCount = undefined;
        }
        showProductsList();
    });
});
