"use strict"

let paramValue = window.location.href.split("?")[1].split("=")[1];

fetch(`https://dummyjson.com/products/${paramValue}`)
.then(res => res.json())
.then(json => SetElement(json))

function SetElement(json){
    let product = document.querySelector(".product");
    console.log(json);
    let str = `<div>
    <img src="${json.images[0]}" alt="jpg">
    </div>`

    product.innerHTML = str;
}
