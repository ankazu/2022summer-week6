"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto"
});
var swiper2 = new Swiper(".giveBack", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true
});
var menuBtn = document.querySelector('.menu_btn');
var menuNav = document.getElementsByTagName('nav')[0];
menuBtn.addEventListener('click', function (e) {
  menuNav.classList.toggle('menu_open');
});
//# sourceMappingURL=all.js.map
