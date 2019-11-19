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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const canvas = document.getElementById('game-canvas');\nconst ctx = canvas.getContext('2d');\n\nconst grass = new Image();\ngrass.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/grass.png\"\nconst bush = new Image();\nbush.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/bush.png\"\n\n\nfunction drawBackground(){\n    ctx.fillStyle = '#c2b280';\n    ctx.fillRect(0, 0, 1000, 60);\n    ctx.fillRect(0, 330, 1000, 30);\n    ctx.fillRect(0, 660, 1000, 40);\n\n    ctx.fillStyle = '#474a51'\n    ctx.fillRect(0, 360, 1000, 300)\n\n    ctx.beginPath();\n    ctx.moveTo(0, 375);\n    ctx.lineTo(1000, 375);\n    ctx.strokeStyle = \"white\";\n    ctx.setLineDash([100, 5]);\n    ctx.lineWidth = 5;\n    ctx.stroke();\n\n    ctx.beginPath();\n    ctx.moveTo(0, 645);\n    ctx.lineTo(1000, 645);\n    ctx.strokeStyle = \"white\";\n    ctx.setLineDash([100, 5]);\n    ctx.lineWidth = 5;\n    ctx.stroke();\n\n    ctx.beginPath();\n    ctx.moveTo(0, 429);\n    ctx.lineTo(1000, 429);\n    ctx.strokeStyle = \"white\";\n    ctx.setLineDash([50, 30]);\n    ctx.lineWidth = 2;\n    ctx.stroke();\n\n    ctx.beginPath();\n    ctx.moveTo(0, 483);\n    ctx.lineTo(1000, 483);\n    ctx.strokeStyle = \"white\";\n    ctx.setLineDash([50, 30]);\n    ctx.lineWidth = 2;\n    ctx.stroke();\n\n    ctx.beginPath();\n    ctx.moveTo(0, 537);\n    ctx.lineTo(1000, 537);\n    ctx.strokeStyle = \"white\";\n    ctx.setLineDash([50, 30]);\n    ctx.lineWidth = 2;\n    ctx.stroke();\n\n    ctx.beginPath();\n    ctx.moveTo(0, 591);\n    ctx.lineTo(1000, 591);\n    ctx.strokeStyle = \"white\";\n    ctx.setLineDash([50, 30]);\n    ctx.lineWidth = 2;\n    ctx.stroke();\n\n    ctx.fillStyle = \"#0c7ecf\"\n    ctx.fillRect(0, 60, 1000, 270)\n  \n}\nfunction drawBush() {       \n    ctx.drawImage(bush, -75, -5, 150, 75)\n    ctx.drawImage(bush, 120, -5, 150, 75)\n    ctx.drawImage(bush, 325, -5, 150, 75)\n    ctx.drawImage(bush, 525, -5, 150, 75)\n    ctx.drawImage(bush, 725, -5, 150, 75)\n    ctx.drawImage(bush, 925, -5, 150, 75)\n}\n\nfunction drawGrass() {\n    ctx.drawImage(grass, 100, 335, 35, 30)\n    ctx.drawImage(grass, 130, 335, 35, 30)\n    ctx.drawImage(grass, 300, 335, 35, 30)\n    ctx.drawImage(grass, 400, 335, 35, 30)\n    ctx.drawImage(grass, 700, 335, 35, 30)\n    ctx.drawImage(grass, 900, 335, 35, 30)\n    ctx.drawImage(grass, 120, 645, 35, 30)\n    ctx.drawImage(grass, 180, 645, 35, 30)\n    ctx.drawImage(grass, 350, 645, 35, 30)\n    ctx.drawImage(grass, 600, 645, 35, 30)\n    ctx.drawImage(grass, 630, 645, 35, 30)\n    ctx.drawImage(grass, 650, 645, 35, 30)\n    ctx.drawImage(grass, 750, 645, 35, 30)\n    ctx.drawImage(grass, 950, 645, 35, 30)\n}\n\nfunction drawBulbasaur() {\n    \n}\n\n\n\nfunction draw() {\n    drawBackground();\n    drawBush();\n    drawGrass();\n    requestAnimationFrame(draw);\n}\n\ndraw();\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });