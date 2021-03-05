export  const swiper = new Swiper('.swiper-container', {
    // direction: 'horizontal',
    loop: true,
    speed: 1000,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 5000,
    },
  });


  export default swiper;