const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

iconMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
