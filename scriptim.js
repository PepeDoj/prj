"use strict";

let das_auto = [
  {
    name: "Audi 2200",
    mark: "Audi",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Malenki",
    image: "img/car1.png",
    price: "3000000 ₽ ",
    value: 3000000,
    rating: "1",
    id: "1",
  },
  {
    name: "Ferrari 1000",
    mark: "Ferrari",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Malenki",
    image: "img/car2.png",
    price: "10000000 ₽ ",
    value: 10000000,
    rating: "2",
    id: "2",
  },
  {
    name: "Chevrolet",
    mark: "Chevrolet",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Malenki",
    image: "img/car3.png",
    price: "1000000 ₽ ",
    value: 1000000,
    rating: "3",
    id: "3",
  },
  {
    name: "Ferrari 3000",
    mark: "Ferrari",
    type: "Cool",
    korobka: "Ruchnik",
    probeg: "Malenki",
    image: "img/car4.png",
    price: "2000000 ₽ ",
    value: 2000000,
    rating: "4",
    id: "4",
  },
  {
    name: "NoNmae 8800",
    mark: "NoName",
    type: "Normal",
    korobka: "Ruchnik",
    probeg: "Bolshoy",
    image: "img/car5.png",
    price: "100000 ₽ ",
    value: 100000,
    rating: "10",
    id: "5",
  },
  {
    name: "Tesla Model SSS",
    mark: "Tesla",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Bolshoy",
    image: "img/car6.png",
    price: "4000000 ₽ ",
    value: 4000000,
    rating: "6",
    id: "6",
  },
  {
    name: "Mercedes 123",
    mark: "Mercedes",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Bolshoy",
    image: "img/car7.png",
    price: "30000000 ₽ ",
    value: 30000000,
    rating: "8",
    id: "7",
  },
  {
    name: "NoName 228",
    mark: "NoName",
    type: "Stidoba",
    korobka: "Ruchnik",
    probeg: "Bolshoy",
    image: "img/car8.png",
    price: "3000 ₽ ",
    value: 3000,
    rating: "100",
    id: "8",
  },
  {
    name: "Mercedes",
    mark: "Mercedes",
    type: "Normal",
    korobka: "Avtomat",
    probeg: "Otsutstvuet",
    image: "img/car9.png",
    price: "10000000 ₽ ",
    value: 10000000,
    rating: "9",
    id: "10",
  },
  {
    name: "NoName 1337",
    mark: "NoName",
    type: "Stidoba",
    korobka: "Avtomat",
    probeg: "Otsutstvuet",
    image: "img/car10.png",
    price: "1000000 ₽ ",
    value: 1000000,
    rating: "60",
    id: "11,"
  },
];

function insertAfter(newNode, existingNode){
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);};

  function vsort(sortType){
  let ch1, ch2;
  let replacedNode;
  let nav = document.querySelector('#content');    
      for (let i = 0; i < nav.children.length; i++){
          for(let j = i+1; j < nav.children.length; j++){
              ch1 = Number(nav.children[i].getAttribute(sortType));
              ch2 = Number(nav.children[j].getAttribute(sortType));
              if(ch1 > ch2){
                  replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                  insertAfter(replacedNode, nav.children[i]);
              };
          };
      };
};

function usort(sortType){
  let ch1, ch2;
  let replacedNode;
  let nav = document.querySelector('#content');    
      for (let i = 0; i < nav.children.length; i++){
          for(let j = i+1; j < nav.children.length; j++){
              ch1 = Number(nav.children[i].getAttribute(sortType));
              ch2 = Number(nav.children[j].getAttribute(sortType));
              if(ch1 < ch2){
                  replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                  insertAfter(replacedNode, nav.children[i]);
              };
          };
      };
};

document.querySelector('#sort-vzr').onclick = function (){vsort('data-price');};
document.querySelector('#sort-ubv').onclick = function (){usort('data-price');};
document.querySelector('#sort-rating').onclick = function (){usort('data-rating');};

function all_pr() {   
  let content = document.querySelector("#content");

  for (let key of das_auto) {      
      content.innerHTML += `<div id="card" 
      data-price=${key.price}><div id="card_left">
      <img id="card_img"src=${key.image} alt=${key.name}/>
      <p id="card_name">${key.name}</p><br>
      <p id="card_rating"></p>
      </div><div id="card_right">
      <p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>Заказать</button></div></div>`;
  }
  basket();
};

window.addEventListener("load", all_pr);

let bful = document.querySelector("#bful");
bful.addEventListener("click", select_type);

function select_pr() {   
  content.innerHTML = "";
  let checkboxes = document.querySelectorAll("input[name=flist]:checked");

  let pr = [];

  checkboxes.forEach(function(elem){
      pr.push(elem.value);
  });
  
  let a = 0;  
  let i = 0;
  while(i < 15){        
      if (document.querySelectorAll
        (".checkbox_cs")[i].checked) {
      a+=1
      i+=20                            
      } else { 
                     
      }
      i+=1;
  }

  if (a == 1){
  for (const product of pr) {        
          for (let key of das_auto) { 

              let card = `<div id="card" data-price=${key.price}>
              <div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/>
              <p id="card_name">${key.name}<br><p id="card_rating"></p>
              </div><div id="card_right"></p>
              <p id="card_price">${key.price}</p> <button class="btnbuy" data-pr=${key.id}>В корзину</button></div></div>`;

              if(product == key.mark) {content.innerHTML += card;}
              else if(product == key.type) {content.innerHTML += card;}
              else if(product == key.korobka) {content.innerHTML += card;}  
              else if(product == key.probeg) {content.innerHTML += card;}                 
      }        
  }
} else{
  all_pr();
}   
  return pr;    
};


function basket() {       
  let list_basket = [];  
 
  document.onclick = event => {
      if (event.target.classList.contains('btnbuy')){                 
          list_basket.push(event.target.dataset.pr);    

          let card_bas = document.querySelector("#card_bas");
          let summa = document.querySelector("#itog_sum");  
          summa = 0;  
          card_bas.innerHTML ="";

              for (const product of list_basket) {        
                  for (let key of das_auto) {             
                      let card = `<div id="card_cart"data-price=${key.price}>
                      <div id="card_left"><img id="card_img"src=${key.image} alt=${key.name}/>
                      <p id="card_name">${key.name}</div>
                      <div id="card_right"></p>
                      <p id="card_price">${key.price}</p> <button class="btnsell" data-pr=${key.id}>В корзину</button></div></div>`;
          
                      if(product == key.id) {               
                      card_bas.innerHTML += card;
                      summa += key.value;   
                      document.querySelector("#itog_sum").innerHTML = summa;  
                      
                      console.log(list_basket); 
                      }
                  }
              }             
      }   
  }    
};

