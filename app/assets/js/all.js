var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
});

var swiper2 = new Swiper(".giveBack", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
});

const menuBtn = document.querySelector('.menu_btn');
const menuNav = document.getElementsByTagName('nav')[0];

menuBtn.addEventListener('click', function(e) {
  menuNav.classList.toggle('menu_open');
})