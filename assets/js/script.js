'use strict';

// Header active

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});
