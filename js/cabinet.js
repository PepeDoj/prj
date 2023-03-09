"use strict"

//button out
let bt_ot = document.querySelector("#modal_out");
bt_ot.addEventListener("click", log_out);

//Функция выхода из логина
function log_out(){
    out.style.display = "none";
    wrapper.style.display = "block";
    window.location.href = 'index.html';
}