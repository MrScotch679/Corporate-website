/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "../node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/ui */ "../node_modules/@fancyapps/ui/dist/fancybox.esm.js");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/style.scss */ "./sass/style.scss");
/* harmony import */ var _css_fancybox_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/fancybox.css */ "./css/fancybox.css");
/* harmony import */ var _modules_menuTrigger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/menuTrigger.js */ "./js/modules/menuTrigger.js");
/* harmony import */ var _modules_modalTrigger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modalTrigger.js */ "./js/modules/modalTrigger.js");
/* harmony import */ var _modules_modalClose_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modalClose.js */ "./js/modules/modalClose.js");
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tabs.js */ "./js/modules/tabs.js");









window.addEventListener('DOMContentLoaded', function () {
  (0,_modules_menuTrigger_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.menu__wrapper', '.menu__items', 'menu__wrapper_active', '.menu__close');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.carousel').slick({
    slidesToShow: 4,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 426,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.carousel .carousel-preview').slick({
    draggable: false,
    touchMove: false
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.journey .journey__items').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    touchMove: false
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.full-catalog__items .carousel-preview').slick();
  (0,_modules_modalTrigger_js__WEBPACK_IMPORTED_MODULE_6__["default"])('.open');
  (0,_modules_modalClose_js__WEBPACK_IMPORTED_MODULE_7__["default"])('.close');
  (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_8__["default"])('.tabs__wrapper', '.tabs__item', '.tabs__content', 'tabs__item_active', 'tabs__content_active');
});

/***/ }),

/***/ "./js/modules/menuTrigger.js":
/*!***********************************!*\
  !*** ./js/modules/menuTrigger.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ menuTrigger; }
/* harmony export */ });
function menuTrigger(menuSelector, buttonSelector, activeClass, closeSelector) {
  var menu = document.querySelector(menuSelector),
      button = document.querySelector(buttonSelector),
      close = document.querySelector(closeSelector);
  close.addEventListener('click', function () {
    menu.classList.toggle(activeClass);
  });
  button.addEventListener('click', function () {
    menu.classList.toggle(activeClass);
  });
}

/***/ }),

/***/ "./js/modules/modalClose.js":
/*!**********************************!*\
  !*** ./js/modules/modalClose.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modalClose(buttonSelector) {
  var modalSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.modal';
  var buttons = document.querySelectorAll(buttonSelector),
      modal = document.querySelector(modalSelector);

  function closeByButton() {
    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }

  function closeByModal() {
    modal.addEventListener('click', function (e) {
      if (e.target && (e.target === modal || e.target.classList.contains('container'))) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  try {
    closeByButton();
    closeByModal();
  } catch (error) {}
}

/* harmony default export */ __webpack_exports__["default"] = (modalClose);

/***/ }),

/***/ "./js/modules/modalTrigger.js":
/*!************************************!*\
  !*** ./js/modules/modalTrigger.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ modalTrigger; }
/* harmony export */ });
function modalTrigger(buttonSelector) {
  var modalSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.modal';
  var button = document.querySelector(buttonSelector),
      modal = document.querySelector(modalSelector);

  try {
    button.addEventListener('click', function () {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  } catch (error) {}
}

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tabs; }
/* harmony export */ });
function tabs(headerSelector, tabsSelector, contentSelector, tabActiveSelector, contentActiveSelector) {
  var header = document.querySelector(headerSelector),
      tabs = document.querySelectorAll(tabsSelector),
      content = document.querySelectorAll(contentSelector);

  try {
    header.addEventListener('click', function (e) {
      var target = e.target;

      if (target && (target.classList.contains(tabsSelector.replace(/\./gi, '')) || target.parentNode.classList.contains(tabsSelector.replace(/\./gi, '')))) {
        tabs.forEach(function (tab, i) {
          if (tab == target || tab.parentNode == target) {
            hideContent();
            showContent(i);
          }
        });
      }
    });
  } catch (error) {}

  function showContent(i) {
    tabs[i].classList.toggle(tabActiveSelector);
    content[i].classList.toggle(contentActiveSelector);
  }

  function hideContent() {
    tabs.forEach(function (tab) {
      tab.classList.remove(tabActiveSelector);
    });
    content.forEach(function (item) {
      item.classList.remove(contentActiveSelector);
    });
  }
}

/***/ }),

/***/ "./css/fancybox.css":
/*!**************************!*\
  !*** ./css/fancybox.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_fancyapps_ui_dist_fancybox_esm_-876435"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_fancyapps_ui_dist_fancybox_esm_-876435"], function() { return __webpack_require__("./js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map