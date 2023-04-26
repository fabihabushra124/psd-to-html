$(document).ready(function () {
  $('.slider').bxSlider();
});

$('.circle-plus').on('click', function () {
  const active = $('.faq .faq-item.active');
  const toggler = $('.faq .faq-item .circle-plus');
  const faqParent = $(this).parent().parent();

  if (!faqParent.hasClass('active') && active) {
    active.removeClass('active');
    toggler.removeClass('opened');
  }

  $(this).toggleClass('opened');
  faqParent.toggleClass('active');
});

// Carosul
$('.owl-carousel').owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    650: {
      items: 2,
      nav: false,
    },
    930: {
      items: 3,
      nav: false,
    },
    1150: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});
