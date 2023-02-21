"use strict";

let cars_list = [
  {
    name: "Audi 2200",
    mark: "Audi",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Malenki",
    image: "img/car1.png",
    price: "3000000 ₽ ",
    rating: "1",
  },
  {
    name: "Ferrari 1000",
    mark: "Ferrari",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Malenki",
    image: "img/car2.png",
    price: "10000000 ₽ ",
    rating: "2",
  },
  {
    name: "Chevrolet",
    mark: "Chevrolet",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Malenki",
    image: "img/car3.png",
    price: "1000000 ₽ ",
    rating: "3",
  },
  {
    name: "Ferrari 3000",
    mark: "Ferrari",
    type: "Cool",
    korobka: "Ruchnik",
    probeg: "Malenki",
    image: "img/car4.png",
    price: "2000000 ₽ ",
    rating: "4",
  },
  {
    name: "NoNmae 8800",
    mark: "NoName",
    type: "Normal",
    korobka: "Ruchnik",
    probeg: "Bolshoy",
    image: "img/car5.png",
    price: "100000 ₽ ",
    rating: "10",
  },
  {
    name: "Tesla Model SSS",
    mark: "Tesla",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Bolshoy",
    image: "img/car6.png",
    price: "4000000 ₽ ",
    rating: "6",
  },
  {
    name: "Mercedes 123",
    mark: "Mercedes",
    type: "Cool",
    korobka: "Avtomat",
    probeg: "Bolshoy",
    image: "img/car7.png",
    price: "30000000 ₽ ",
    rating: "8",
  },
  {
    name: "NoName 228",
    mark: "NoName",
    type: "Stidoba",
    korobka: "Ruchnik",
    probeg: "Bolshoy",
    image: "img/car8.png",
    price: "3000 ₽ ",
    rating: "100",
  },
  {
    name: "Mercedes",
    mark: "Mercedes",
    type: "Normal",
    korobka: "Avtomat",
    probeg: "Otsutstvuet",
    image: "img/car9.png",
    price: "10000000 ₽ ",
    rating: "9",
  },
  {
    name: "NoName 1337",
    mark: "NoName",
    type: "Stidoba",
    korobka: "Avtomat",
    probeg: "Otsutstvuet",
    image: "img/car10.png",
    price: "1000000 ₽ ",
    rating: "60",
  },
];
function all_product() {
  let content = document.querySelector("#content");

  for (let key of cars_list) {
    content.innerHTML += `<div id="card" data-price=${key.price} 
    data-rating=${key.rating}><div id="card_left">
    <img id="card_img"src=${key.image} alt=${key.name}/>
    <p id="card_name">${key.name}</div>
    <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
  }
}

function mySortDesc(sortType) {
  let ch1, ch2;
  let replacedNode;

  let nav = document.querySelector("#content");
  for (let i = 0; i < nav.children.length - 1; i++) {
    for (let j = i + 1; j < nav.children.length; j++) {
      ch1 = Number(nav.children[i].getAttribute(sortType));
      ch2 = Number(nav.children[j].getAttribute(sortType));

      if (ch1 < ch2) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}



window.addEventListener("load", all_product);
let bfil = document.querySelector("#bfil");
bfil.addEventListener("click", select_type);

function select_product() {
  content.innerHTML = "";
  let checkboxes = document.querySelectorAll("input[name=flist]:checked");

  let pr = [];

  checkboxes.forEach(function (elem) {
    pr.push(elem.value);
  });

  for (const product of pr) {
    if (product == "fall") {
      for (let key of cars_list) {
        content.innerHTML += `<div id="card" data-price=${key.price} 
        data-rating=${key.rating}><div id="card_left">
        <img id="card_img"src=${key.image} alt=${key.name}/>
        <p id="card_name">${key.name}</div><div id="card_right"></p><p id="card_price">${key.price}</p></button></div></div>`;
      }
    }

    if (product == "fTesla") {
      for (let key of cars_list) {
        if (key.mark == "Tesla") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
    data-rating=${key.rating}><div id="card_left">
    <img id="card_img"src=${key.image} alt=${key.name}/>
    <p id="card_name">${key.name}</div>
    <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fMercedes") {
      for (let key of cars_list) {
        if (key.mark == "Mercedes") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
    data-rating=${key.rating}><div id="card_left">
    <img id="card_img"src=${key.image} alt=${key.name}/>
    <p id="card_name">${key.name}</div>
    <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fAudi") {
      for (let key of cars_list) {
        if (key.mark == "Audi") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
    data-rating=${key.rating}><div id="card_left">
    <img id="card_img"src=${key.image} alt=${key.name}/>
    <p id="card_name">${key.name}</div>
    <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fChevrolet") {
      for (let key of cars_list) {
        if (key.mark == "Chevrolet") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
    data-rating=${key.rating}><div id="card_left">
    <img id="card_img"src=${key.image} alt=${key.name}/>
    <p id="card_name">${key.name}</div>
    <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fNoName") {
      for (let key of cars_list) {
        if (key.mark == "NoName") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
    data-rating=${key.rating}><div id="card_left">
    <img id="card_img"src=${key.image} alt=${key.name}/>
    <p id="card_name">${key.name}</div>
    <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fFerrari") {
      for (let key of cars_list) {
        if (key.mark == "Ferrari") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
    data-rating=${key.rating}><div id="card_left">
    <img id="card_img"src=${key.image} alt=${key.name}/>
    <p id="card_name">${key.name}</div>
    <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
      }
    }
  }

    if (product == "fCool") {
      for (let key of cars_list) {
        if (key.type == "Cool") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
    data-rating=${key.rating}><div id="card_left">
    <img id="card_img"src=${key.image} alt=${key.name}/>
    <p id="card_name">${key.name}</div>
    <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fNormal") {
      for (let key of cars_list) {
        if (key.type == "Normal") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
    data-rating=${key.rating}><div id="card_left">
    <img id="card_img"src=${key.image} alt=${key.name}/>
    <p id="card_name">${key.name}</div>
    <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fStidoba") {
      for (let key of cars_list) {
        if (key.type == "Stidoba") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
          data-rating=${key.rating}><div id="card_left">
          <img id="card_img"src=${key.image} alt=${key.name}/>
          <p id="card_name">${key.name}</div><div id="card_right">
          </p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fAvtomat") {
      for (let key of cars_list) {
        if (key.korobka == "Avtomat") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
          data-rating=${key.rating}><div id="card_left">
          <img id="card_img"src=${key.image} alt=${key.name}/>
          <p id="card_name">${key.name}</div>
          <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }


    if (product == "fRuchnik") {
      for (let key of cars_list) {
        if (key.korobka == "Ruchnik") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
          data-rating=${key.rating}><div id="card_left">
          <img id="card_img"src=${key.image} alt=${key.name}/>
          <p id="card_name">${key.name}</div>
          <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fMalenki") {
      for (let key of cars_list) {
        if (key.probeg == "Malenki") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
          data-rating=${key.rating}><div id="card_left">
          <img id="card_img"src=${key.image} alt=${key.name}/>
          <p id="card_name">${key.name}</div>
          <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fBolshoy") {
      for (let key of cars_list) {
        if (key.probeg == "Bolshoy") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
          data-rating=${key.rating}><div id="card_left">
          <img id="card_img"src=${key.image} alt=${key.name}/>
          <p id="card_name">${key.name}</div>
          <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }

    if (product == "fOtsutstvuet") {
      for (let key of cars_list) {
        if (key.probeg == "Otsutstvuet") {
          content.innerHTML += `<div id="card" data-price=${key.price} 
          data-rating=${key.rating}><div id="card_left">
          <img id="card_img"src=${key.image} alt=${key.name}/>
          <p id="card_name">${key.name}</div>
          <div id="card_right"></p><p id="card_price">${key.price}</p></div></div>`;
        }
      }
    }
  }

  return pr;
}

function select_type() {
  let ty = [];
  let pr = select_product();
  console.log(ty);

  let checkboxes = document.querySelectorAll("input[name=flist]:checked");

  checkboxes.forEach(function (elem) {
    ty.push(elem.value);
  });

 
}

document.querySelector("#sort-asc").onclick = function () {
  mySort("data-price");
};
document.querySelector("#sort-desc").onclick = function () {
  mySortDesc("data-price");
};
document.querySelector("#sort-rating").onclick = function () {
  mySortDesc("data-rating");
};

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


function mySort(sortType) {
  let ch1, ch2;
  let replacedNode;

  let nav = document.querySelector("#content");
  for (let i = 0; i < nav.children.length - 1; i++) {
    for (let j = i + 1; j < nav.children.length; j++) {
      ch1 = Number(nav.children[i].getAttribute(sortType));
      ch2 = Number(nav.children[j].getAttribute(sortType));

      if (ch1 > ch2) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

