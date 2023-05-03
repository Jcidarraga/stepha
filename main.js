//const conexion = require('./conexionBD')

//import {conexion} from './conexionBD.js'

//enviar registro a BD
// document.querySelector("#register-button").onclick = function () {
//     const nombre = document.querySelector("#nameRegistro").value;
//     const email = document.querySelector("#emailRegistro").value;
//     const usuario = document.querySelector("#usernameRegistro").value;
//     const pass = document.querySelector("#passRegistro").value;

//     console.log(nombre);
//     console.log(email);
//     console.log(usuario);
//     console.log(pass);

//     alert('xd')

// };

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconCarrito = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");

navEmail.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);
productDetailClose.addEventListener("click", closeProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  
  mobileMenu.classList.toggle("inactive");

}

function toggleDetail() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isMenuDesktopClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailContainerClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isMenuDesktopClosed) {
    desktopMenu.classList.add("inactive");
  }

  if (!isProductDetailContainerClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCart.classList.toggle("inactive");
}

function openProductDetail() {
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetail() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "pc",
  price: 610,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "pc",
  price: 610,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function productos(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener("click", openProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const parrafos = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    parrafos.appendChild(productPrice);
    parrafos.appendChild(productName);

    const figure = document.createElement("figure");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", "./assets/icons8-add-50.png");

    figure.appendChild(productImg);

    productInfo.appendChild(parrafos);
    productInfo.appendChild(figure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}
productos(productList);
