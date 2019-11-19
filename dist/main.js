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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\nconst canvas = document.getElementById('game-canvas');\n\nnew _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BulbasaurAdventure {\n    constructor(canvas){\n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height }; \n        this.upPressed = false;\n        this.downPressed = false;\n        this.leftPressed = false;\n        this.rightPressed = false;\n        this.up = true;\n        this.down = true;\n        this.right = true;\n        this.left = true;\n        this.sx = 0\n        this.sy = 0\n        this.x = 500;\n        this.y = 650\n\n        this.draw();\n        this.handleKeyDown = this.handleKeyDown.bind(this);\n        this.handleKeyUp = this.handleKeyUp.bind(this);\n\n    }\n\n    drawBackground() {\n        this.ctx.fillStyle = '#c2b280';\n        this.ctx.fillRect(0, 0, 1000, 60);\n        this.ctx.fillRect(0, 330, 1000, 30);\n        this.ctx.fillRect(0, 660, 1000, 40);\n\n        this.ctx.fillStyle = '#474a51'\n        this.ctx.fillRect(0, 360, 1000, 300)\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 375);\n        this.ctx.lineTo(1000, 375);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([100, 5]);\n        this.ctx.lineWidth = 5;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 645);\n        this.ctx.lineTo(1000, 645);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([100, 5]);\n        this.ctx.lineWidth = 5;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 429);\n        this.ctx.lineTo(1000, 429);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 483);\n        this.ctx.lineTo(1000, 483);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 537);\n        this.ctx.lineTo(1000, 537);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 591);\n        this.ctx.lineTo(1000, 591);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.fillStyle = \"#0c7ecf\"\n        this.ctx.fillRect(0, 60, 1000, 270)\n\n    }\n\n    drawBush() {   \n        const bush = new Image();\n        bush.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/bush.png\"    \n        this.ctx.drawImage(bush, -75, -5, 150, 75)\n        this.ctx.drawImage(bush, 120, -5, 150, 75)\n        this.ctx.drawImage(bush, 325, -5, 150, 75)\n        this.ctx.drawImage(bush, 525, -5, 150, 75)\n        this.ctx.drawImage(bush, 725, -5, 150, 75)\n        this.ctx.drawImage(bush, 925, -5, 150, 75)\n    }\n\n    drawGrass() {\n        const grass = new Image();\n        grass.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/grass.png\"\n        this.ctx.drawImage(grass, 100, 335, 35, 30)\n        this.ctx.drawImage(grass, 130, 335, 35, 30)\n        this.ctx.drawImage(grass, 300, 335, 35, 30)\n        this.ctx.drawImage(grass, 400, 335, 35, 30)\n        this.ctx.drawImage(grass, 700, 335, 35, 30)\n        this.ctx.drawImage(grass, 900, 335, 35, 30)\n        this.ctx.drawImage(grass, 120, 645, 35, 30)\n        this.ctx.drawImage(grass, 180, 645, 35, 30)\n        this.ctx.drawImage(grass, 350, 645, 35, 30)\n        this.ctx.drawImage(grass, 600, 645, 35, 30)\n        this.ctx.drawImage(grass, 630, 645, 35, 30)\n        this.ctx.drawImage(grass, 650, 645, 35, 30)\n        this.ctx.drawImage(grass, 750, 645, 35, 30)\n        this.ctx.drawImage(grass, 950, 645, 35, 30)\n    }\n\n    drawBulbasaur() {\n        const bulbasaur = new Image();\n        bulbasaur.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/bulbasaur.png\"\n        this.ctx.drawImage(bulbasaur, this.sx, this.sy, 24, 25, this.x, this.y, 50, 50)\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)\n        this.registerEvents();\n        this.drawBackground();\n        this.drawBush();\n        this.drawGrass();\n        this.drawBulbasaur();\n        this.move();\n        requestAnimationFrame(this.draw.bind(this));\n    }\n\n    registerEvents() {\n        document.addEventListener(\"keydown\", this.handleKeyDown, false);\n        document.addEventListener(\"keyup\", this.handleKeyUp, false)\n    }\n\n    move() {\n        if (this.upPressed && this.up) {\n            this.y = this.y - 27;\n            this.up = false\n        }\n        if (this.upPressed === false) {\n            this.up = true\n        }\n    }\n\n\n    handleKeyDown(e) {\n       \n        if (e.keyCode === 97 || e.keyCode === 38) {\n            this.upPressed = true;\n        }\n        if (e.keyCode === 83 || e.keyCode === 40) {\n            this.downPressed = true;\n        }\n        if (e.keyCode === 65 || e.keyCode === 37) {\n            this.leftPressed = true;\n        }\n        if (e.keyCode === 68 || e.keyCode === 39) {\n            this.rightPressed = true;\n        }\n    }\n\n    handleKeyUp(e) {\n        if (e.keyCode === 38 || e.keyCode === 97) {\n            this.upPressed = false;\n        }\n        if (e.keyCode === 83 || e.keyCode === 40) {\n            this.downPressed = false;\n        }\n        if (e.keyCode === 65 || e.keyCode === 37) {\n            this.leftPressed = false;\n        }\n        if (e.keyCode === 68 || e.keyCode === 39) {\n            this.rightPressed = false;\n        }\n    }\n\n    gameOver() {\n    \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BulbasaurAdventure);\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ })

/******/ });