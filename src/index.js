let loader=document.getElementById('loader');
window.addEventListener("load",vanish);
function vanish(){
  loader.className = "hidden"
}

// Nav Bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("Menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("nav_animation");
}
// when we click on hamburger icon its close 
const navLink = navMenu.getElementsByTagName("li");
const liList = [...navLink]
liList.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.toggle("nav_animation");
}

// Swiper Slider
    const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
  const testimonial = new Swiper(".testimonial", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: false,
    navigation: {
      nextEl: ".swiper-button-next_testimonial",
      prevEl: ".swiper-button-prev_testimonial",
    },
    breakpoints: {
      768:{
slidesPerView: 2,
        spaceBetween: 30,
},
      1280: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1440:{
        slidesPerView: 3.5,
        spaceBetween: 10,
      }
    },
  });

  const ourTeam = new Swiper(".our_team", {
    slidesPerView: 1,
    spaceBetween: 20,
    // centeredSlides: true,
    // pagination: false,
    breakpoints: {
        640:{
            slidesPerView:2,
            spaceBetween:20
        },
        768:{
        slidesPerView: 2,
          spaceBetween: 20,
  },
  1024:{
    slidesPerView:3,
    spaceBetween:20,
  },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1440:{
          slidesPerView:3,
          spaceBetween:20
        },
        1444:{
          slidesPerView:3,
          spaceBetween:20
        }
      },
  });