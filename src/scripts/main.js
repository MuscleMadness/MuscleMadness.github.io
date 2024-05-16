import { mobileNavbar } from "./navbar.js";
import { imageModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  mobileNavbar();
  imageModal();
});

var navItems = document.querySelectorAll(".nav__menu-item");

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Remove 'active' class from all items
    navItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Add 'active' class to the clicked item
    this.classList.add("active");
  });
});
