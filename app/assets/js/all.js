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
const loginClose = document.getElementById('login_close');
const loginModel = document.getElementById('login_modal');
const signIn = document.getElementById('sign_in');

menuBtn.addEventListener('click', function(e) {
  menuNav.classList.toggle('menu_open');
})

loginClose.addEventListener('click', function() {
  loginModel.style.display = 'none';
})
signIn.addEventListener('click', function() {
  loginModel.style.display = 'block';
})

const reserveDate = document.querySelector("#reserve-date");
const validDate = document.querySelector("#valid-date");

const datepickerInit = (el) => {
    new Datepicker(el, {
        orientation: "bottom auto",
    });
};

if (reserveDate) datepickerInit(reserveDate);
if (validDate) datepickerInit(validDate);