import $ from 'jquery';
import 'slick-carousel';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import '../sass/style.scss';
import '../css/fancybox.css';

import menuTrigger from './modules/menuTrigger.js';
import modalTrigger from './modules/modalTrigger.js';
import modalClose from './modules/modalClose.js';
import accordion from './modules/accordion.js';


window.addEventListener('DOMContentLoaded', function() {
  menuTrigger('.menu__wrapper', '.menu__items', 'menu__wrapper_active');
    
  $('.carousel').slick({
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
  });

  $('.carousel .carousel-preview').slick({
    draggable: false
  });

  $('.journey .journey__items').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.full-catalog__items .carousel-preview').slick();

  modalTrigger('.open');
  modalClose('.close');
  accordion('.tabs__wrapper', '.tabs__item', '.tabs__content');
});