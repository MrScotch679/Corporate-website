import $ from 'jquery';
import 'slick-carousel';

export default function journeySlider(triggerSelector) {
  $(triggerSelector).slick({
    slidesToShow: 1,
    variableWidth: false,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    touchMove: false,
  });
}