import $ from 'jquery';
import 'slick-carousel';

export default function mainSliderCards(triggerSelector) {
  $(triggerSelector).slick({
    draggable: false,
    touchMove: false,
  });
}