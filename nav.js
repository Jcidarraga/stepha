const nav = document.querySelector(".nav");

const imgMobile = document.createElement("img");
imgMobile.setAttribute("src", "./assets/icon_menu.svg");
imgMobile.classList.add("menu");

nav.appendChild(imgMobile);

const navbarLeft = document.createElement("div");
navbarLeft.classList.add("navbar-left");

const img = document.createElement("img");
img.setAttribute("src", "./assets/cochecito-de-bebe.png");
img.classList.add("logo");

const listaLeft = document.createElement("ul");

const arr = ["Inicio", "Nosotros", "Servicios", "Contacto"];
const links = ["/", "/", "/", "/"];
for (i = 0; i <= arr.length - 1; i++) {
  const li = document.createElement("li");
  listaLeft.appendChild(li);
  const link = document.createElement("a");
  li.appendChild(link);
  li.innerHTML = '<a href="' + links[i] + '">' + arr[i] + "</a>";
}

navbarLeft.appendChild(img);
navbarLeft.appendChild(listaLeft);
nav.appendChild(navbarLeft);

//NavbarMobile
const navbarMobile = document.createElement("div");
navbarMobile.classList.add("mobile-menu");
navbarMobile.classList.add("inactive");
const listaMobile = document.createElement("ul");

const arr3 = [
  "CATEGORIAS",
  "Inicio",
  "Nosotros",
  "Servicios",
  "Contacto",
  "Inicia Sesión",
  "Registrate",
];
const links3 = ["/", "/", "/", "/", "/", "./login.html", "./registro.html"];
for (i = 0; i <= arr3.length - 1; i++) {
  const li3 = document.createElement("li");
  listaMobile.appendChild(li3);
  const link = document.createElement("a");
  li3.appendChild(link);
  li3.innerHTML = '<a href="' + links3[i] + '">' + arr3[i] + "</a>";
}
navbarMobile.appendChild(listaMobile);
nav.appendChild(navbarMobile);

//navbarRight
const navbarRight = document.createElement("div");
navbarRight.classList.add("navbar-right");
const listaRight = document.createElement("ul");
listaRight.classList.add("ul1");

const arr2 = ["Registrate", "Inicia Sesión"];
const links2 = ["./registro.html", "./login.html"];

for (i = 0; i <= arr2.length - 1; i++) {

  const li2 = document.createElement("li");
  listaRight.appendChild(li2);

  const link = document.createElement("a");

  li2.classList.add("navbar-email");
  li2.appendChild(link);
  navbarRight.appendChild(listaRight);
  nav.appendChild(navbarRight);

  li2.innerHTML = '<a href="' + links2[i] + '">' + arr2[i] + "</a>";
  
  if (document.querySelector("ul.ul2") !== null) {
    li2.innerHTML = '<a href="' + +'">' + user + "</a>";
    console.log(" no es index");
  }
}

/*<div class="navbar-user">
<ul>
    <li class="navbar-user">user</li>
</ul>
</div> */
