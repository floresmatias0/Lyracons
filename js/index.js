var background = document.getElementById("change");
var item3 = document.getElementById("item3");
var backgroundV2 = document.querySelector(".backgroundV2");
var aux = true;

item3.addEventListener("click", () => {
  if(aux === false){
    background.className = "background";
    aux = true;
  }else if(aux === true){
    background.className = "backgroundV2";
    aux = false;
  }
})

var product = {
  image:"../assets/images/sony.jpg",
  title:"Titulo del producto",
  marca:"Marca",
  price:"$12.345,00",
}

var products = [];

for(let i = 0; i < 8; i++){
  products.push(product)
}

let rigth = document.querySelector(".rigth")

if(products && products.length > 0){
  let product;
  products.map((point,i)=> {
    product = document.createElement("div")
    rigth.append(product)
    return (
      product.innerHTML = `
      <div class="card" key={i}>
        <div class="contentImage">
          <img id="imageCard" src=${point.image} alt="photo"/>
        </div>
        <div>
          <h2>${point.title}</h2>
          <p>${point.marca}</p>
          <p>${point.price}</p>
          <button>COMPRAR</button>
        </div>
      <div>
      `
    )
  })
}

let item1 = document.getElementById("item1")
var item = true;

item1.addEventListener("click", () => {
  let submenu = document.getElementById("submenu")
    if(item === true){
        submenu.className = "submenuV2"
        item = false;
    }else if(item === false){
      submenu.className = "hidden"
      item = true;
    }
})

let menu = document.querySelector(".menu")
var submenuRes = document.getElementById("submenuRes")
var sub = true;

menu.addEventListener("click", () => {
  if(sub === true){
    submenuRes.className = "resNoHidden";
    sub = false;
  }else if(sub === false){
    submenuRes.className = "resHidden";
    sub = true;
  }
})

let item4 = document.getElementById("item4");
var saludo = "Hola Mundo!"
  item4.addEventListener("click", () => {
    let text = document.createElement("p")
    text.innerText = `${saludo}`
    let change = document.getElementById("change");
    change.append(text);
  })
