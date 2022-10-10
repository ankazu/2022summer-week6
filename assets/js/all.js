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
var loginClose = document.getElementById('login_close');
var loginModel = document.getElementById('login_modal');
var signIn = document.getElementById('sign_in');
menuBtn.addEventListener('click', function (e) {
  menuNav.classList.toggle('menu_open');
});
loginClose.addEventListener('click', function () {
  loginModel.style.display = 'none';
});
signIn.addEventListener('click', function () {
  loginModel.style.display = 'block';
});
var reserveDate = document.querySelector("#reserve-date");
var validDate = document.querySelector("#valid-date");

var datepickerInit = function datepickerInit(el) {
  new Datepicker(el, {
    orientation: "bottom auto"
  });
};

if (reserveDate) datepickerInit(reserveDate);
if (validDate) datepickerInit(validDate);
//# sourceMappingURL=all.js.map
