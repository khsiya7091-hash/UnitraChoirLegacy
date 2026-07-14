// Mobile menu toggle
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

if (menu && menuLinks) {
  menu.addEventListener("click", function () {
    menuLinks.classList.toggle("active");
    // Optional: toggle an "is-active" class on the toggle button for animation
    this.classList.toggle("is-active");
  });
}
