"use strict"

//начало реггистрации-авторизации

let out = document.querySelector(".out");
let wrapper = document.querySelector(".wrapper");

let out_text = document.querySelector("#out_text");

//button out
let bt_ot = document.querySelector("#modal_out");
bt_ot.addEventListener("click", log_out);

//button log in
let bt_lg = document.querySelector("#submit");
bt_lg.addEventListener("click", log_in);

//button sign up
let bt_sig = document.querySelector("#submit_signUP");
bt_sig.addEventListener("click", sign_up);

//Функция выхода из логина
function log_out(){
    out.style.display = "none";
    wrapper.style.display = "block";
}

//функция регистрации
function log_in(){
    let lg = document.querySelector("#lg");
    let pw = document.querySelector("#pw");

    fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: lg.value,
        password: pw.value,
        })
    })
    .then(res => res.json())
    .then(json => log(json))

    function log(json){

        if(json.message != "Invalid credentials"){
            console.log(json)
            localStorage.setItem(json.username, JSON.stringify({"id":json.id, "token": json.token}));

            out.style.display = "block";
            out_text.innerHTML = `И зачем, ${json.username} зарегистрировался ?`;
            wrapper.style.display = "none";
        }
        else alert("Такокго пользователя нет")

    }
}

function sign_up(){
    let lg = document.querySelector("#lg_signUP");
    let pw = document.querySelector("#pw_signUP");

    fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: lg.value,
        password: pw.value,
        age: 100
        })
    })
    .then(res => res.json())
    .then(json => sign(json))
    
    function sign(json){
        out.style.display = "block";
        out_text.innerHTML = `И зачем, ${json.username} зарегистрировался ?`;
        wrapper.style.display = "none";
    }
}


//Подключаемся к магазину
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => SetElement(json.products))

let element = document.querySelector(".element");
let categoris = document.querySelector("#categoris");

function SetElement(json){
    let a = {};
    for (const i of json) {
        let str = `<div class="el" data-category="${i.category}" data-prise="${i.price}" data-sort="${i.rating}">
        <img src="${i.images[0]}" alt="jpg">
        <br>
        <div class="textElemTitle">${i.title}</div>
        <div class="textElem">${i.price} Руб.</div>
        <br>
        <input type="button" class="btnBye" data-name="${i.title}" data-prise="${i.price}" value="КУПИТЬ">
        <input type="button" class="btnInfo" value="?" onClick="document.location = 'product.html?id=${i.id}'">
        </div>`

        a[i.category] = 1
        element.innerHTML += str;
    }

    let str = "<option value=''>All</option>";
    for (const key in a) {
        str+=`<option value='${key}'>${key}</option>`
    }

    categoris.innerHTML += str;
}

//Сортировка по категориям
function mySortCategory(sortTipe){
    element = document.querySelector(".element");
    for(let i = 0; i < element.children.length; i++){
        if(sortTipe != element.children[i].getAttribute("data-category") && sortTipe != ""){
            element.children[i].style.display = "none";
        }
        else element.children[i].style.display = "block";
    }
}


//Сортировка по возростанию
function mySort(sortTipe){
    element = document.querySelector(".element");
    for(let i = 0; i < element.children.length; i++){
        for(let j = i; j < element.children.length; j++){
            if(+element.children[i].getAttribute(sortTipe) > +element.children[j].getAttribute(sortTipe)){
                let replaceNode = element.replaceChild(element.children[j], element.children[i]);
                insertAfter(replaceNode, element.children[i]);
            }
        }
    }
}

//Сортировка по убыванию
function mySortDedc(sortTipe){
    element = document.querySelector(".element");
    for(let i = 0; i < element.children.length; i++){
        for(let j = i; j < element.children.length; j++){
            if(+element.children[i].getAttribute(sortTipe) < +element.children[j].getAttribute(sortTipe)){
                let replaceNode = element.replaceChild(element.children[j], element.children[i]);
                insertAfter(replaceNode, element.children[i]);
            }
        }
    }
}


//Сортировка по рейтингу
function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}




//Куски кода для корзины
let cart = {
    "price": 0
}

if(localStorage.getItem("cart") != null){
    cart = localStorage.getItem("cart");
    cart = ('cart: ', JSON.parse(cart))
}

//Функция на кнопку покупки на карте товара
document.onclick = event => {
    if(event.target.classList.contains("btnBye")){
        plusFunction(+event.target.getAttribute("data-prise"),event.target.getAttribute("data-name"));
    }
}

//Добавляет суму к корзине
function plusFunction(sum, name){
    cart.price += sum;

    if(cart[name] >= 1) cart[name] += 1;
    else cart[name] = 1;

    localStorage.setItem("cart", JSON.stringify(cart))
}

document.querySelector("#sort-asc").onclick = function(){mySort("data-prise")};
document.querySelector("#sort-desc").onclick = function(){mySortDedc("data-prise")};
document.querySelector("#sort-sort").onclick = function(){mySort("data-sort")};
document.querySelector("#categoris").onchange = function(){mySortCategory(document.querySelector("#categoris").value)};

