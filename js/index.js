document.addEventListener('DOMContentLoaded', (event) => {

    //ITEM1
    let item1 = document.getElementById("item1")
    var item = true;

    item1.addEventListener("click", () => {
      let submenu = document.getElementById("submenu")
        if(item === true){
            submenu.className = "submenuV2 animate__animated animate__fadeInDown animate__faster"
            item = false;
        }else if(item === false){
          submenu.className = "hidden"
          item = true;
        }
    })

    //ITEM2
    let item2 = document.getElementById("item2")
    var prod = true;

    item2.addEventListener("click", () => {
      if(prod === true){
          rigth.innerHTML = `
          <div class="rigth">
            <h1 class="title">Sorry no product please reload page</h1>
          </div>`
          prod = false;
      }else if(prod === false){
        location.reload();
        prod = true;
      }
    })

    //ITEM3
    var item3 = document.getElementById("item3");
    var backgroundV2 = document.querySelector(".backgroundV2");
    var background = document.getElementById("change")
    var aux = true;

    item3.addEventListener("mouseover", () => {
      if(aux === false){
        background.className = "background";
        aux = true;
      }else if(aux === true){
        background.className = "backgroundV2";
        aux = false;
      }
    })

    //ITEM4
    let item4 = document.getElementById("item4");
    var auxSaludo = true;

    item4.addEventListener("click", () => {
      if(auxSaludo === true){
        let text = document.createElement("p")
          text.setAttribute("class", "parrafo")
          text.innerText = "Hola Mundo!"
        let change = document.getElementById("change");
          change.append(text);
          auxSaludo = false;
      }
    })

    //MENU MOBILE
    let menu = document.querySelector(".menu")
    var submenuRes = document.getElementById("submenuRes")
    var sub = true;

    menu.addEventListener("click", () => {
      if(sub === true){
        submenuRes.className = "resNoHidden animate__animated animate__fadeInLeft animate__faster";
        sub = false;
      }else if(sub === false){
        submenuRes.className = "resHidden";
        sub = true;
      }
    })

    //CARGA DE PRODUCTOS
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
    var product;
    if(products && products.length > 0){

      products.forEach((point,i)=> {
        product = document.createElement("div")
        rigth.append(product)
        return (
          product.innerHTML = `
          <div class="card" key=${i}>
            <div class="contentImage">
              <img id="imageCard" src=${point.image} alt="photo"/>
            </div>
            <div>
              <h2>${point.title}</h2>
              <p>${point.marca}</p>
              <p>${point.price}</p>
              <button class="buy">COMPRAR</button>
            </div>
          <div>
          `
        )
      })
    }

    var buy = document.querySelectorAll(".buy");
    buy.forEach((item, i) => {
      item.addEventListener("click", ()=>{
          Swal.fire({
            title: 'Genial!',
            text: 'Gracias por su compra',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      })
    });

});
