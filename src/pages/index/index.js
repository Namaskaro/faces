//libs
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);




//components
import '@src/components/header/_';




// pages scripts (то что нельзя описать в компонентах)

    const swiper = new Swiper('.swiper-banner', {
        slidesPerView: 1,
        loop: true,
      
    
        pagination: {
          el: '.swiper-pagination',
        },
    
      })


      const swiperTeam = new Swiper('.swiper-team', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
    
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
      })

     


 