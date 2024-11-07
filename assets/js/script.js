(function () {
  'use strict';

  const kv = new Swiper('#kv', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  const galleryThumbs = new Swiper('#gallery-thumbs', {
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });

  const detail = new Swiper('#detail-slide', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
}());

  //ハンバーガーメニュー
$(document).ready(function () {
  $("#header-btn").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});