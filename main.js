/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  var funcionamento = document.querySelector('[data-semana]');\n  var diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  var horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n  var dataAgora = new Date();\n  var diaAgora = dataAgora.getDay();\n  var horarioAgora = dataAgora.getHours();\n  var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n//# sourceURL=webpack://rafael-fraga/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initmenuMobile)\n/* harmony export */ });\nfunction initmenuMobile() {\n  var btnMobile = document.getElementById('btn-mobile');\n\n  function toggleMenu(event) {\n    if (event.type === 'touchstart') event.preventDefault();\n    var nav = document.getElementById('nav');\n    nav.classList.toggle('active');\n    var active = nav.classList.contains('active');\n    event.currentTarget.setAttribute('aria-expanded', active);\n\n    if (active) {\n      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');\n    } else {\n      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');\n    }\n  }\n\n  btnMobile.addEventListener('click', toggleMenu);\n  btnMobile.addEventListener('touchstart', toggleMenu);\n}\n\n//# sourceURL=webpack://rafael-fraga/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  var sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  var windowMetade = window.innerHeight * 0.4;\n\n  function animaScroll() {\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top - windowMetade;\n      var isSectionVisible = sectionTop - windowMetade < 0;\n\n      if (isSectionVisible) {\n        section.classList.add('ativo');\n      } else if (section.classList.remove('ativo')) ;\n    });\n  }\n\n  animaScroll();\n  window.addEventListener('scroll', animaScroll);\n}\n\n//# sourceURL=webpack://rafael-fraga/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  var linksInternos = document.querySelectorAll('.js-menu a[href^=\"#\"]');\n\n  function scrollToSection(event) {\n    event.preventDefault();\n    var href = event.currentTarget.getAttribute('href');\n    var section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  }\n\n  linksInternos.forEach(function (link) {\n    link.addEventListener('click', scrollToSection);\n  });\n}\n\n//# sourceURL=webpack://rafael-fraga/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/writing-effect.js":
/*!**************************************!*\
  !*** ./js/modules/writing-effect.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initWritingEffect)\n/* harmony export */ });\nfunction initWritingEffect() {\n  var titulo = document.querySelector('h1.writing');\n\n  function typeWriter(elemento) {\n    var textoArray = elemento.innerHTML.split('');\n    elemento.innerHTML = '';\n    textoArray.forEach(function (letra, i) {\n      setTimeout(function () {\n        elemento.innerHTML += letra;\n      }, 120 * i);\n    });\n  }\n\n  typeWriter(titulo);\n}\n\n//# sourceURL=webpack://rafael-fraga/./js/modules/writing-effect.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_scroll_animacao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_scroll_suave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll-suave */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_writing_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/writing-effect */ \"./js/modules/writing-effect.js\");\n/* harmony import */ var _modules_funcionamento__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/funcionamento */ \"./js/modules/funcionamento.js\");\n\n\n\n\n\n(0,_modules_funcionamento__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_scroll_suave__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_scroll_animacao__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_menu_mobile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_writing_effect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://rafael-fraga/./js/script.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;