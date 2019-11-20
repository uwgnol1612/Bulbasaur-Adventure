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

/***/ "./src/modules/bulbasaur.js":
/*!**********************************!*\
  !*** ./src/modules/bulbasaur.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Bulbasaur {\n    constructor(ctx, dimensions) {\n        this.ctx = ctx\n        this.dimensions = dimensions\n        this.keyState = { upPressed:false, downPressed: false, rightPressed: false, leftPressed: false}\n        this.moveDir = { up: true, down: true, left: true, right: true };\n        this.sx = 0\n        this.sy = 0\n        this.x = 500;\n        this.y = 650\n        \n\n    }\n    \n    drawBulbasaur() {\n        const bulbasaur = new Image();\n        bulbasaur.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/bulbasaur.png\"\n        this.ctx.drawImage(bulbasaur, this.sx, this.sy, 23, 25, this.x, this.y, 50, 50)\n    }\n\n    move() {\n        if (this.keyState['upPressed'] && this.moveDir['up'] && this.y > 30) {\n            this.y = this.y - 30;\n            this.moveDir['up'] = false\n            this.sx = 0\n        }\n        if (!this.keyState['upPressed']) {\n            this.moveDir['up'] = true\n        }\n        if (this.keyState['downPressed'] && this.moveDir['down'] && this.y < this.dimensions.height - 50) {\n            this.y = this.y + 30;\n            this.moveDir['down'] = false\n            this.sx = 23\n        }\n        if (!this.keyState['downPressed']) {\n            this.moveDir['down'] = true\n        }\n        if (this.keyState['leftPressed'] && this.moveDir['left'] && this.x > 15) {\n            this.x = this.x - 30;\n            this.moveDir['left'] = false\n            this.sx = 46\n        }\n        if (!this.keyState['leftPressed']) {\n            this.moveDir['left'] = true\n        }\n\n        if (this.keyState['rightPressed'] && this.moveDir['right'] && this.x < this.dimensions.width - 50) {\n            this.x = this.x + 30;\n            this.moveDir['right'] = false\n            this.sx = 69\n        }\n        if (!this.keyState['rightPressed']) {\n            this.moveDir['right'] = true\n        }\n\n    }\n\n\n    handleKeyDown(e) {\n       \n        if (e.keyCode === 97 || e.keyCode === 38) {\n            this.bulbasaur.keyState['upPressed'] = true;\n        }\n        if (e.keyCode === 83 || e.keyCode === 40) {\n            this.bulbasaur.keyState['downPressed'] = true;\n        }\n        if (e.keyCode === 65 || e.keyCode === 37) {\n            this.bulbasaur.keyState['leftPressed'] = true;\n        }\n        if (e.keyCode === 68 || e.keyCode === 39) {\n            this.bulbasaur.keyState['rightPressed'] = true;\n        }\n    }\n\n    handleKeyUp(e) {\n        if (e.keyCode === 38 || e.keyCode === 97) {\n            this.bulbasaur.keyState['upPressed'] = false;\n        }\n        if (e.keyCode === 83 || e.keyCode === 40) {\n            this.bulbasaur.keyState['downPressed'] = false;\n        }\n        if (e.keyCode === 65 || e.keyCode === 37) {\n            this.bulbasaur.keyState['leftPressed'] = false;\n        }\n        if (e.keyCode === 68 || e.keyCode === 39) {\n            this.bulbasaur.keyState['rightPressed'] = false;\n        }\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bulbasaur);\n\n//# sourceURL=webpack:///./src/modules/bulbasaur.js?");

/***/ }),

/***/ "./src/modules/car.js":
/*!****************************!*\
  !*** ./src/modules/car.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n    class Car {\n        constructor(ctx, dimensions) {\n            this.ctx = ctx\n            this.dimensions = dimensions\n            this.carsX = {  carX1: 400,\n                            carX2: 400 + Math.ceil(Math.random()*7)*120,\n                            carX3: 300,\n                            carX4: 300 + Math.ceil(Math.random()*7)*120,\n                            carX5: 200, \n                            carX6: 200 + Math.ceil(Math.random()*7)*120,\n                            carX7: 100,\n                            carX8: 100 + Math.ceil(Math.random()*7)*120,\n                            carX9: 500,\n                            carX10: 500 + Math.ceil(Math.random()*7)*120          \n            }\n            this.carsY = { carY1: 360, carY2: 360, carY3: 410, carY4: 410, carY5: 460, carY6: 460, carY7: 520, carY8: 520, carY9: 570, carY10: 570\n            };\n            this.carSX = { carX1: 0, carX2: 95, carX3: 665, carX4: 760, carX5: 190, carX6: 285, carX7: 855, carX8: 950, carX9: 380, carX10: 475 \n            }\n\n            this.carHeight = 90\n            this.carWidth = 120\n\n        }\n\n\n        drawCars() {\n            const car = new Image();\n            car.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/cars.png\"\n            let i;\n            for (i = 0; i < 10; i++) {\n                this.ctx.drawImage(car, Object.values(this.carSX)[i], 0, 95, 90, Object.values(this.carsX)[i], Object.values(this.carsY)[i], this.carWidth, this.carHeight)\n            }\n\n        }\n            \n\n        move() {\n\n            ['carX1', 'carX2', 'carX5', 'carX6', 'carX9', 'carX10', 'carX3', 'carX4', 'carX7', 'carX8'].forEach(carX => {\n                if (['carX1', 'carX2', 'carX5', 'carX6', 'carX9', 'carX10'].includes(carX)) {\n                    if (this.carsX[carX] < this.dimensions.width + 120) {\n                        this.carsX[carX] = this.carsX[carX] + 5\n                    } else {\n                        this.carsX[carX] = -120\n                        this.carSX[carX] = (Math.floor(Math.random() * 7)) * 95\n                    }\n                } else {\n                    if (this.carsX[carX] > -120) {\n                        this.carsX[carX] = this.carsX[carX] - 5\n                    } else {\n                        this.carsX[carX] = this.dimensions.width + 120\n                        this.carSX[carX] = 665 + (Math.floor(Math.random() * 7)) * 95\n\n                    }\n                    \n                } \n            })\n\n\n\n        }\n\n\n\n\n    }\n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (Car);\n    \n    \n\n//# sourceURL=webpack:///./src/modules/car.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/modules/car.js\");\n/* harmony import */ var _bulbasaur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulbasaur */ \"./src/modules/bulbasaur.js\");\n\n\n\nclass BulbasaurAdventure {\n    constructor(canvas){\n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height }; \n        this.car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.dimensions)\n        this.bulbasaur = new _bulbasaur__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.dimensions)\n        this.draw();\n\n    }\n\n    drawBackground() {\n        this.ctx.fillStyle = '#c2b280';\n        this.ctx.fillRect(0, 0, 1090, 65);\n        this.ctx.fillRect(0, 330, 1090, 30);\n        this.ctx.fillRect(0, 660, 1090, 40);\n\n        this.ctx.fillStyle = '#474a51'\n        this.ctx.fillRect(0, 360, 1090, 300)\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 375);\n        this.ctx.lineTo(1090, 375);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([100, 5]);\n        this.ctx.lineWidth = 5;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 645);\n        this.ctx.lineTo(1090, 645);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([100, 5]);\n        this.ctx.lineWidth = 5;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 429);\n        this.ctx.lineTo(1090, 429);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 483);\n        this.ctx.lineTo(1090, 483);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 537);\n        this.ctx.lineTo(1090, 537);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 591);\n        this.ctx.lineTo(1090, 591);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.fillStyle = \"#0c7ecf\"\n        this.ctx.fillRect(0, 65, 1090, 270)\n\n    }\n\n    drawBush() {   \n        const bush = new Image();\n        bush.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/bush_sprite.png\"\n        this.ctx.drawImage(bush, 0, 0, 70, 70, -30, -20, 90, 105)\n        this.ctx.drawImage(bush, 70, 0, 70, 70, 30, -65, 90, 100)\n        this.ctx.drawImage(bush, 140, 0, 70, 70, 90, -20, 90, 105)\n        this.ctx.drawImage(bush, 210, 0, 70, 70, 150, -20, 90, 105)\n        this.ctx.drawImage(bush, 280, 0, 70, 70, 210, -20, 90, 105)\n        this.ctx.drawImage(bush, 350, 0, 70, 70, 270, -65, 90, 100)\n        this.ctx.drawImage(bush, 0, 0, 70, 70, 330, -20, 90, 105)\n        this.ctx.drawImage(bush, 70, 0, 70, 70, 390, -20, 90, 105)\n        this.ctx.drawImage(bush, 140, 0, 70, 70, 450, -20, 90, 105)\n        this.ctx.drawImage(bush, 210, 0, 70, 70, 510, -65, 90, 100)\n        this.ctx.drawImage(bush, 280, 0, 70, 70, 570, -20, 90, 105)\n        this.ctx.drawImage(bush, 350, 0, 70, 70, 630, -20, 90, 105)\n        this.ctx.drawImage(bush, 0, 0, 70, 70, 690, -20, 90, 105)\n        this.ctx.drawImage(bush, 70, 0, 70, 70, 750, -65, 90, 100)\n        this.ctx.drawImage(bush, 140, 0, 70, 70, 810, -20, 90, 105)\n        this.ctx.drawImage(bush, 210, 0, 70, 70, 870, -20, 90, 105)\n        this.ctx.drawImage(bush, 280, 0, 70, 70, 930, -20, 90, 105)\n        this.ctx.drawImage(bush, 350, 0, 70, 70, 990, -65, 90, 100)\n        this.ctx.drawImage(bush, 0, 0, 70, 70, 1050, -20, 90, 105)\n    }\n\n    drawGrass() {\n        const grass = new Image();\n        grass.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/grass.png\"\n        this.ctx.drawImage(grass, 100, 335, 35, 30)\n        this.ctx.drawImage(grass, 130, 335, 35, 30)\n        this.ctx.drawImage(grass, 300, 335, 35, 30)\n        this.ctx.drawImage(grass, 400, 335, 35, 30)\n        this.ctx.drawImage(grass, 700, 335, 35, 30)\n        this.ctx.drawImage(grass, 900, 335, 35, 30)\n        this.ctx.drawImage(grass, 120, 645, 35, 30)\n        this.ctx.drawImage(grass, 180, 645, 35, 30)\n        this.ctx.drawImage(grass, 350, 645, 35, 30)\n        this.ctx.drawImage(grass, 600, 645, 35, 30)\n        this.ctx.drawImage(grass, 630, 645, 35, 30)\n        this.ctx.drawImage(grass, 650, 645, 35, 30)\n        this.ctx.drawImage(grass, 750, 645, 35, 30)\n        this.ctx.drawImage(grass, 950, 645, 35, 30)\n    }\n\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)\n        this.registerEvents();\n        this.drawBackground();\n        this.drawBush();\n        this.drawGrass();\n        this.bulbasaur.move();\n        this.bulbasaur.drawBulbasaur();\n        this.car.drawCars()\n        this.car.move();\n        this.collision();\n        requestAnimationFrame(this.draw.bind(this));\n    }\n\n    registerEvents() {\n        document.addEventListener(\"keydown\", this.bulbasaur.handleKeyDown.bind(this), false);\n        document.addEventListener(\"keyup\", this.bulbasaur.handleKeyUp.bind(this), false)\n    }\n\n\n    collision() {\n        const carsX = Object.values(this.car.carsX)\n        const carsY = Object.values(this.car.carsY)\n        \n        let i;\n        for (i = 0; i < carsX.length; i++ ) {\n            if (carsX[i] <= this.bulbasaur.x + 50 && \n                carsX[i] + this.car.carWidth >= this.bulbasaur.x &&\n                carsY[i] + 50 >= this.bulbasaur.y &&\n                carsY[i] <= this.bulbasaur.y) {\n                this.bulbasaur.sx = 0\n                this.bulbasaur.x = 500\n                this.bulbasaur.y = 650\n            }\n\n        }\n\n\n    }\n\n    \n    gameOver() {\n    \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BulbasaurAdventure);\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ })

/******/ });