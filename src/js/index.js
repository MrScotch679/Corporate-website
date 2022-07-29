import "@fancyapps/ui";

import '../sass/style.scss';
import '../css/fancybox.css';

import menuTrigger from './modules/menuTrigger.js';
import tabs from './modules/tabs.js';
import mainSlider from './modules/sliders/mainSlider.js';
import mainSliderCards from './modules/sliders/mainSliderCards.js';
import catalogCardSlider from './modules/sliders/catalogCardSlider.js';
import journeySlider from './modules/sliders/journeySlider.js';
import modalComponent from "./modules/modalComponent";


window.addEventListener('DOMContentLoaded', function() {
  menuTrigger('.menu__wrapper', '.menu__button', 'menu__wrapper_active', '.menu__close');

  modalComponent('.open', '.close');

  mainSlider('.carousel');
  mainSliderCards('.carousel .carousel-preview');
  journeySlider('.journey .journey__items');
  catalogCardSlider('.full-catalog__items .carousel-preview');

  tabs('.tabs__wrapper', '.tabs__item', '.tabs__content', 'tabs__item_active', 'tabs__content_active');
});