var navbar = document.querySelector(".navbar");
var item3 = document.getElementById("item3");
var navbarV2 = document.querySelector(".navbarV2")
var aux = true;

item3.addEventListener("click", () => {
    navbar.setAttribute("class", "navbarV2");
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
  console.log(products)
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
          <button>BUTTON</button>
        </div>
      <div>
      `
    )
  })
}

let item1 = document.getElementById("item1")

item1.addEventListener("click", () => {
  let submenu = document.getElementById("submenu")
  submenu.setAttribute("id", "submenuV2")
})

let menu = document.querySelector(".menu")
var submenuHidden = document.getElementById("submenuResponsivehidden")

menu.addEventListener("click", () => {
  submenuHidden.setAttribute("id","submenuResponsive")
})
