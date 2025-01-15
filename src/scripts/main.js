import { mobileNavbar } from "./navbar.js";
import { imageModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  mobileNavbar();
  imageModal();
});

const socialLinks = {
  "fa-instagram": "https://www.instagram.com/muscle.madness.25/",
  "fa-facebook-f":
    "https://www.facebook.com/people/Muscle-Madness/61565273034156/",
  "fa-youtube": "https://www.youtube.com/MuscleMadness25",
  "fa-phone-alt": "tel:123456789",
  "fa-envelope": "mailto:muscle.madness@gmail.com",
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
