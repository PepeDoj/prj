"use strict"

let cart;

let table = document.querySelector("#table")

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => plusAtem(json.products))

function plusAtem(json){

    cart = localStorage.getItem("cart");
    cart = ('cart: ', JSON.parse(cart))

    let str = `<tr>
        <td> КАРТИНКА </td>
        <td> НАЗВАНИЕ </td>
        <td> КОЛИЧИСТВО </td>
        <td> ЦЕНА </td>
        </tr>`;

    for (const i of json) {
        for (const key in cart) {
            if(i.title == key){
                str += `<tr>
                <td> <img src="${i.images[0]}" alt="jpg"> </td>
                <td>${i.title}</td>
                <td>${cart[key]}</td>
                <td>${i.price}</td>
                </tr>`
            }
        }
    }

    str += `<tr>
        <td></td>
        <td></td>
        <td> ОБЩАЯ ЦЕНА</td>
        <td>${cart.price}</td>
        </tr>`;

    table.innerHTML = str;
}