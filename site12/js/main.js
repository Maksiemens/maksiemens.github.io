/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const headerContainer = document.querySelector('.js-headerContainer');
// const sidenav = document.querySelector('.js-sidenav');
// headerContainer.addEventListener('click', (event) => {
//   if(event.target.classList.contains('js-hamburgerButton')) {
//     headerContainer.classList.add('show-overlay');
//     sidenav.classList.add('show-sidenav');
//   }
//   console.log('click', event.target);
//   if(event.target.classList.contains('js-headerContainer')) {
//     headerContainer.classList.remove('show-overlay');
//     sidenav.classList.remove('show-sidenav');
//   }
//   if(event.target.classList.contains('js-sidenav')) {
//     event.stopPropagation();
//   }
// });
// //

/***/ }),

/***/ "./src/blocks/modules/ideas/ideas.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/ideas/ideas.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/intro/intro.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/intro/intro.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/introduce/introduce.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/introduce/introduce.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/portfolio/portfolio.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/portfolio/portfolio.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/quiz/quiz.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/quiz/quiz.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/sign-up/sign-up.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sign-up/sign-up.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const formControlUpload = document.querySelector('.js-formControlUpload');
// const formInputUpload = document.querySelector('.js-formInputUpload');
// formControlUpload.addEventListener('click', () => {
//   formInputUpload.click();
// });

/***/ }),

/***/ "./src/blocks/modules/work/work.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/work/work.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/intro/intro */ "./src/blocks/modules/intro/intro.js");
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_intro_intro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_ideas_ideas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/ideas/ideas */ "./src/blocks/modules/ideas/ideas.js");
/* harmony import */ var _modules_ideas_ideas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_ideas_ideas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_quiz_quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/quiz/quiz */ "./src/blocks/modules/quiz/quiz.js");
/* harmony import */ var _modules_quiz_quiz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_quiz_quiz__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/portfolio/portfolio */ "./src/blocks/modules/portfolio/portfolio.js");
/* harmony import */ var _modules_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_work_work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/work/work */ "./src/blocks/modules/work/work.js");
/* harmony import */ var _modules_work_work__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_work_work__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_introduce_introduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/introduce/introduce */ "./src/blocks/modules/introduce/introduce.js");
/* harmony import */ var _modules_introduce_introduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_introduce_introduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_sign_up_sign_up__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/sign-up/sign-up */ "./src/blocks/modules/sign-up/sign-up.js");
/* harmony import */ var _modules_sign_up_sign_up__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_sign_up_sign_up__WEBPACK_IMPORTED_MODULE_8__);










/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules.js */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map