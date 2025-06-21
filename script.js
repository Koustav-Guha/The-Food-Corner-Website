new Swiper('.wrapped', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
        slidesPerView:1
    },
    700:{
        slidesPerView:2
    },
    1000:{
        slidesPerView:3
    }
  }

});