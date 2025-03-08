import { mobileNavbar } from "./navbar.js";
import { imageModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  mobileNavbar();
  imageModal();
});

const socialLinks = {
  "fa-instagram": "http://instagram.musclemadness.co.in",
  "fa-facebook-f": "http://facebook.musclemadness.co.in",
  "fa-youtube": "https://www.youtube.com/@MuscleMadness25",
  "fa-phone-alt": "tel:+917200360683",
  "fa-envelope": "mailto:muscle.madness@gmail.com",
  "fa-map": "http://maps.musclemadness.co.in"
};

Object.keys(socialLinks).forEach((iconClass) => {
  document.querySelectorAll(`.${iconClass}`).forEach((icon) => {
    const url = socialLinks[iconClass];
    const parent = icon.parentElement;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.classList.add("social-link");
    parent.replaceChild(link, icon);
    link.appendChild(icon);
  });
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
