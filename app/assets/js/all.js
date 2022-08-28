var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
});

var swiper2 = new Swiper(".giveBack", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
});