/* all slider start */
$(document).ready(function () {
  $('.feedback-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
    centerMode: true,
    centerPadding: '450px',
    dots: false,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 1,
          centerPadding: '270px',
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        }
      }
    ]
  });

});
