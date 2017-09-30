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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var solarflare = __webpack_require__(1);

console.log(solarflare(['div', document.createElement('h1')]));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const el = __webpack_require__(3);
const http = __webpack_require__(4);
const mount = __webpack_require__(5);

var solarflare = el;
solarflare.http = http;
solarflare.mount = mount;

module.exports = solarflare



/***/ }),
/* 3 */
/***/ (function(module, exports) {

var el;

el = function (rays) {
	var $element = document.createElement('div');

	if (Array.isArray(rays)) {
		rays.forEach((e, i) => {
			if (i === 0 && typeof e === 'string') {
				if (e.length > 0) {
					$element = document.createElement(e);
				}
				
				return;
			} 

			if (typeof e === 'string') {
				$element.innerHTML += e;
			}

			if (e.nodeType) {
				$element.appendChild(e);
			}

			if (typeof e === 'object') {
				if (Array.isArray(e)) {
					$element.appendChild(el(e));
				} else {
					Object.keys(e).filter((key) => {
						$element.setAttribute(key, e[key]);
					});
				}
			}
		});
	}

	return $element;
};

module.exports = el;



/***/ }),
/* 4 */
/***/ (function(module, exports) {

function http(url, options) {
	var self = this;

	var then = function (callback) { 
		if (typeof callback === 'function') { 
			callback(); 
		} 
		
		return self; 
	};

	var error = function (callback) { 
		if (typeof callback === 'function') { 
			callback(); 
		}
		
		return self; 
	};

	var xhr = XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			then();
		} else {
			error();
		}
	};
	xhr.open(options.method || 'GET', url, true);
	xhr.send();
};

module.exports = http;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function mount(element, target) {
	if (!target) {
		target = this;
	}

	if (target && target.nodeType) {
		this.appendChild(element);
	}
};

document.body.mount = mount;

module.exports = mount;

/***/ })
/******/ ]);