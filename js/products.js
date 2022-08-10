const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

// function sortProducts(criteria, array){
//     let result = [];
//     if (criteria === ORDER_ASC_BY_NAME)
//     {
//         result = array.sort(function(a, b) {
//             if ( a.name < b.name ){ return -1; }
//             if ( a.name > b.name ){ return 1; }
//             return 0;
//         });
//     }else if (criteria === ORDER_DESC_BY_NAME){
//         result = array.sort(function(a, b) {
//             if ( a.name > b.name ){ return -1; }
//             if ( a.name < b.name ){ return 1; }
//             return 0;
//         });
//     }else if (criteria === ORDER_BY_PROD_COUNT){
//         result = array.sort(function(a, b) {
//             let aCount = parseInt(a.soldCount);
//             let bCount = parseInt(b.soldCount);

//             if ( aCount > bCount ){ return -1; }
//             if ( aCount < bCount ){ return 1; }
//             return 0;
//         });
//     }

//     return result;
// }

// function setProdID(id) {
//     localStorage.setItem("prodID", id);
//     window.location = "products.html"
// }




function showProductsList() {

    let product = currentProductsArray.products
    console.log(currentProductsArray)
    console.log(product)

    let htmlContentToAppend = "";


    for (let i = 0; i < product.length; i++) {

        let prod = product[i];


        //     if (((minCount == undefined) || (minCount != undefined && parseInt(products.catId) >= minCount)) &&
        //         ((maxCount == undefined) || (maxCount != undefined && parseInt(products.catId) <= maxCount))){

        htmlContentToAppend += `
            <div id="setProdID(${prod.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${prod.image}" alt="${prod.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${prod.name}</h4>
                            <small class="text-muted">${prod.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${prod.description}</p>
                    </div>
                </div>
            </div>
            `

            document.getElementById("prod-container").innerHTML = htmlContentToAppend;
    }

    
    // }
}



// function sortAndShowProducts(sortCriteria, ProductsArray){
//     currentSortCriteria = sortCriteria;

//     if(ProductsArray != undefined){
//         currentProductsArray = ProductsArray;
//     }

//     currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

//     //Muestro los productos ordenados
//     showProductsList();
// }  




document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData("https://japceibal.github.io/emercado-api/cats_products/101.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            currentProductsArray = resultObj.data

            showProductsList();

            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });


});

