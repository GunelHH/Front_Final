// First Slider
$("#owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  mouseDrag: false,
  autoplay: true,
  autoplayHoverPause: true,
  smartSpeed: 1000,
  navigation: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// Second Slider
$("#owlcard").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,

  responsive: {
    0: {
      items: 1.3,
    },
    600: {
      items: 1.3,
    },
    1000: {
      items: 4,
    },
  },
});
// Third Slider
$("#owlcard-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// Fourth Slider
$("#owlblog").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
$("#lastcarousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1.5,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
