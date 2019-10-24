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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Perceptron.js":
/*!***************************!*\
  !*** ./src/Perceptron.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _examples_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples.js */ \"./src/examples.js\");\n/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ \"./src/Utils.js\");\n\n\n\nconst LEARNING_CONST = 0.1;\n\nclass Perceptron {\n\n    constructor(number, wages) {\n        this.number = number;\n        this.wages = [...wages];\n    }\n\n    teachPerceptron(gridValues) {\n        let pocket_record = {\n            record: 0,\n            wages: this.wages\n        };\n\n        let pocket = Object.assign({}, pocket_record);\n\n        for (let i = 0; i < 10000; i++) {\n            let example_number  = _Utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getRandomInt\"](40);\n            let correctAnswer   = _examples_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][example_number].number === this.number ? 1 : -1;\n            let ERR             = correctAnswer - this.getTresholdFunctionResult('learn', example_number, gridValues);\n\n            if (ERR === 0) {\n                pocket.record++;\n            } else {\n                if (pocket.record > pocket_record.record) {\n                    Object.assign(pocket_record, pocket);\n                }\n                this.updateWages(ERR, example_number);\n                pocket.record  = 0;\n                pocket.wages   = this.wages;\n            }\n        }\n        this.wages = pocket_record.wages;\n    }\n\n    updateWages(ERR, example_number) {\n        for (let j = 0; j <= 35; j++) {\n            this.wages[j] = this.wages[j] + (LEARNING_CONST * ERR * _examples_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][example_number].values[j]);\n        }\n    }\n\n    checkNumberFromGrid(gridValues) {\n        if (this.getTresholdFunctionResult('check', null, gridValues) === 1) {\n            const results_area = document.getElementById('results');\n            results_area.innerHTML = `<p> Wynik (${Date.now()}): ${this.number} </p>`\n        }\n    }\n\n    getTresholdFunctionResult(action, example_number, gridValues) {\n        let summary = 0.0;\n        for (let s = 0; s <= 35; s++) {\n            if (action === 'learn') {\n                summary += (this.wages[s] * _examples_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][example_number].values[s]);\n            } else {\n                summary += (this.wages[s] * gridValues[s]);\n            }\n        }\n        return (summary < 0 ? -1 : 1);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Perceptron);\n\n//# sourceURL=webpack:///./src/Perceptron.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/*! exports provided: getRandomWages, generateGrid, getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomWages\", function() { return getRandomWages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateGrid\", function() { return generateGrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\nfunction getRandomWages() {\n    let wages = [];\n    for (let i = 0; i <= 35; i++) {\n        wages[i] = (2 * Math.random()) - 1;\n    }\n    return wages;\n}\n\nfunction generateGrid(rowsAmount, colsAmount) {\n    const containter = document.getElementById('container');\n\n    container.style.setProperty('--grid-rows', rowsAmount);\n    container.style.setProperty('--grid-cols', colsAmount);\n\n    for (let c = 1; c <= (rowsAmount * colsAmount); c++) {\n        const cell = document.createElement(\"div\");\n        container.appendChild(cell).className   = `grid-item number-${c}`;\n        containter.appendChild(cell).style      = 'background-color: black;';\n    };\n};\n\nfunction getRandomInt(max) {\n    return (Math.floor(Math.random() * Math.floor(max)));\n}\n\n\n//# sourceURL=webpack:///./src/Utils.js?");

/***/ }),

/***/ "./src/examples.js":
/*!*************************!*\
  !*** ./src/examples.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst examples = [\n    {\n        number: 0,\n        values : [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]\n    },\n    {\n        number: 0,\n        values : [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0]\n    },\n    {\n        number: 0,\n        values : [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0]\n    }, \n    {\n        number: 0,\n        values : [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0]\n    },\n    {\n        number: 1,\n        values: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]\n    },\n    {\n        number: 1,\n        values: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]\n    },\n    {\n        number: 1,\n        values: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1]\n    },\n    {\n        number: 1,\n        values: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1]\n    },\n    {\n        number: 2,\n        values: [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]\n    },\n    {\n        number: 2,\n        values: [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1]\n    }\n    ,\n    {\n        number: 2,\n        values: [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1]\n    },\n    {\n        number: 2,\n        values: [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1]\n    },\n    {\n        number: 3,\n        values: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]\n    },\n    {\n        number: 3,\n        values: [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0]\n    },\n    {\n        number: 3,\n        values: [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1]\n    },\n    {\n        number: 3,\n        values: [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1]\n    },\n    {\n        number: 4,\n        values: [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]\n    },\n    {\n        number: 4,\n        values: [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]\n    },\n    {\n        number: 4,\n        values: [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1]\n    },\n    {\n        number: 4,\n        values: [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]\n    },\n    {\n        number: 5,\n        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]\n    },\n    {\n        number: 5,\n        values: [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1]\n    },\n    {\n        number: 5,\n        values: [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0]\n    },\n    {\n        number: 5,\n        values: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0]\n    },\n    {\n        number: 6,\n        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]\n    },\n    {\n        number: 6,\n        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0]\n    },\n    {\n        number: 6,\n        values: [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]\n    },\n    {\n        number: 6,\n        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1]\n    },\n    {\n        number: 7,\n        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]\n    },\n    {\n        number: 7,\n        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]\n    },\n    {\n        number: 7,\n        values: [1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0]\n    },\n    {\n        number: 7,\n        values: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]\n    },\n    {\n        number: 8,\n        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]\n    },\n    {\n        number: 8,\n        values: [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0]\n    },\n    {\n        number: 8,\n        values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n    },\n    {\n        number: 8,\n        values: [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]\n    },\n    {\n        number: 9,\n        values: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]\n    },\n    {\n        number: 9,\n        values: [1,\n             0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]\n    },\n    {\n        number: 9,\n        values: [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0]\n    },\n    {\n        number: 9,\n        values: [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1]\n    }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (examples);\n\n//# sourceURL=webpack:///./src/examples.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Perceptron_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Perceptron.js */ \"./src/Perceptron.js\");\n/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ \"./src/Utils.js\");\n\n\n\nlet Perceptrons = [];\nlet gridValues  = [];\n\n//Initialize array with Perceptrons\nfor (let i = 0; i < 10; i++) {\n    Perceptrons[i] = new _Perceptron_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i, _Utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getRandomWages\"]());\n}\n\n//Initialize grid with pixels\nsetTimeout(function() {\n    _Utils_js__WEBPACK_IMPORTED_MODULE_1__[\"generateGrid\"](7, 5);\n    initializeGridValues();\n    addEventListenersForButtons();\n}, 200);\n\nfunction initializeGridValues() {\n    for (let i = 1; i <= 35; i++) {\n        gridValues[i] = 0;\n    }\n    gridValues[0] = 1;\n}\n\nfunction addEventListenersForButtons() {\n    const cells             = document.getElementsByClassName('grid-item');\n    const leranButton       = document.getElementById('button-learn');\n    const checkResultButton = document.getElementById('button-check');\n\n    Array.from(cells).forEach(cell => {\n        cell.addEventListener('click', function() {\n            cell.classList.forEach(function(className) {\n                if (className.startsWith('number')) {\n                    updateGridValuesAndColor(className.substring(className.indexOf('-') + 1), cell);\n                }\n            });\n        });\n    });\n\n    leranButton.addEventListener('click', function() {\n        for (let i = 0; i < 10; i++) {\n            Perceptrons[i].teachPerceptron(gridValues);\n        }\n        window.alert(\"Learning has ended.\")\n    });\n\n    checkResultButton.addEventListener('click', function() {\n        for (let i = 0; i < 10; i++) {\n            Perceptrons[i].checkResultFromDisplay(gridValues);\n        }\n    });\n} \n\nfunction updateGridValuesAndColor(number, cell) {\n    if (gridValues[number] === 0) {\n        gridValues[number] = 1;\n        cell.style = 'background-color: pink;';\n    } else {\n        gridValues[number] = 0;\n        cell.style = 'background-color: black;';\n    }\n    for (let i = 0; i < 10; i++) {\n        Perceptrons[i].checkNumberFromGrid(gridValues);\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });