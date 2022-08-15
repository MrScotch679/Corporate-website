import $ from 'jquery';
import 'slick-carousel';

export default function mainSlider(triggerSelector) {
  $(triggerSelector).slick({
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
}