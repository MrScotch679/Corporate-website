!function(){"use strict";var e,t={1112:function(e,t,n){n(2689);function o(e,t,n,o,r){var c=document.querySelector(e),i=document.querySelectorAll(t),a=document.querySelectorAll(n);try{c.addEventListener("click",(function(e){var n=e.target,c=n.classList.contains(t.replace(/\./gi,""));n&&c&&i.forEach((function(e,t){e==n&&(i.forEach((function(e){e.classList.remove(o)})),a.forEach((function(e){e.classList.remove(r)})),function(e){i[e].classList.toggle(o),a[e].classList.toggle(r)}(t))}))}))}catch(e){}}var r=n(9755),c=n.n(r);n(9154);var i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".modal",o=document.querySelector(e),r=document.querySelectorAll(t),c=document.querySelector(n);function i(){o.addEventListener("click",(function(){c.style.display="flex",document.body.style.overflow="hidden"}))}function a(){r.forEach((function(e){e.addEventListener("click",(function(){c.style.display="none",document.body.style.overflow=""}))}))}function s(){c.addEventListener("click",(function(e){var t=e.target;t&&(t===c||t.classList.contains("container"))&&(c.style.display="none",document.body.style.overflow="")}))}try{i(),a(),s()}catch(e){}};window.addEventListener("DOMContentLoaded",(function(){var e,t,n,r,a,s,u;e=".menu__wrapper",t=".menu__button",n="menu__wrapper_active",r=".menu__close",a=document.querySelector(e),s=document.querySelector(t),document.querySelector(r).addEventListener("click",(function(){a.classList.contains(n)?(a.classList.remove(n),document.body.style.overflow=""):a.classList.add(n)})),s.addEventListener("click",(function(){a.classList.toggle(n),window.screen.availWidth<=426&&(document.body.style.overflow="hidden")})),i(".open",".close"),u=".carousel",c()(u).slick({slidesToShow:4,infinite:!0,autoplay:!0,autoplaySpeed:3e3,draggable:!0,responsive:[{breakpoint:1025,settings:{slidesToShow:3}},{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:426,settings:{slidesToShow:1}}]}),function(e){c()(e).slick({draggable:!1,touchMove:!1})}(".carousel .carousel-preview"),function(e){c()(e).slick({slidesToShow:1,variableWidth:!1,arrows:!1,centerMode:!0,autoplay:!0,autoplaySpeed:3e3,draggable:!1,touchMove:!1})}(".journey .journey__items"),function(e){c()(e).slick()}(".full-catalog__items .carousel-preview"),o(".tabs__wrapper",".tabs__item",".tabs__content","tabs__item_active","tabs__content_active")}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var c=n[e]={exports:{}};return t[e].call(c.exports,c,c.exports,o),c.exports}o.m=t,e=[],o.O=function(t,n,r,c){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],c=e[l][2];for(var a=!0,s=0;s<n.length;s++)(!1&c||i>=c)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(a=!1,c<i&&(i=c));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[n,r,c]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,c,i=n[0],a=n[1],s=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(s)var l=s(o)}for(t&&t(n);u<i.length;u++)c=i[u],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(l)},n=self.webpackChunkex_gumina=self.webpackChunkex_gumina||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),o.O(void 0,[452],(function(){return o(6981)}));var r=o.O(void 0,[452],(function(){return o(1112)}));r=o.O(r)}();