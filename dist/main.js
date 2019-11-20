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

/***/ "./src/modules/base.js":
/*!*****************************!*\
  !*** ./src/modules/base.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Base {\n    constructor(ctx) {\n        this.ctx = ctx\n        this.basesX = { baseX1: 45,\n                        baseX2: 285,\n                        baseX3: 525,\n                        baseX4: 765,\n                        baseX5: 1005\n                    }\n        this.basesY = 10\n        this.baseWidth = 60;\n        this.baseHeight = 55\n    }\n\n    drawBases() {\n        const base = new Image();\n        base.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/home_sprite.png\"\n        const basesX = Object.values(this.basesX)\n        let i;\n        for (i = 0; i < basesX.length; i++) {\n            this.ctx.drawImage(base, basesX[i], this.basesY, this.baseWidth, this.baseHeight)\n        }\n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);\n\n//# sourceURL=webpack:///./src/modules/base.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n    class Car {\n        constructor(ctx, dimensions) {\n            this.ctx = ctx\n            this.dimensions = dimensions\n            this.carsX = {  carX1: 400,\n                            carX2: 400 + Math.ceil(Math.random()*7)*120,\n                            carX3: 300,\n                            carX4: 300 + Math.ceil(Math.random()*7)*120,\n                            carX5: 200, \n                            carX6: 200 + Math.ceil(Math.random()*7)*120,\n                            carX7: 100,\n                            carX8: 100 + Math.ceil(Math.random()*7)*120,\n                            carX9: 500,\n                            carX10: 500 + Math.ceil(Math.random()*7)*120          \n            }\n            this.carsY = { carY1: 360, carY2: 360, carY3: 410, carY4: 410, carY5: 460, carY6: 460, carY7: 520, carY8: 520, carY9: 570, carY10: 570\n            };\n            this.carSX = { carX1: 0, carX2: 95, carX3: 665, carX4: 760, carX5: 190, carX6: 285, carX7: 855, carX8: 950, carX9: 380, carX10: 475 \n            }\n\n            this.carHeight = 90\n            this.carWidth = 120\n\n        }\n\n\n        drawCars() {\n            const car = new Image();\n            car.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/cars.png\"\n            let i;\n            for (i = 0; i < 10; i++) {\n                this.ctx.drawImage(car, Object.values(this.carSX)[i], 0, 95, 90, Object.values(this.carsX)[i], Object.values(this.carsY)[i], this.carWidth, this.carHeight)\n            }\n\n        }\n            \n\n        moveCars() {\n\n            ['carX1', 'carX2', 'carX5', 'carX6', 'carX9', 'carX10', 'carX3', 'carX4', 'carX7', 'carX8'].forEach(carX => {\n                if (['carX1', 'carX2', 'carX5', 'carX6', 'carX9', 'carX10'].includes(carX)) {\n                    if (this.carsX[carX] < this.dimensions.width + 120) {\n                        this.carsX[carX] = this.carsX[carX] + 5\n                    } else {\n                        this.carsX[carX] = -120\n                        this.carSX[carX] = (Math.floor(Math.random() * 7)) * 95\n                    }\n                } else {\n                    if (this.carsX[carX] > -120) {\n                        this.carsX[carX] = this.carsX[carX] - 5\n                    } else {\n                        this.carsX[carX] = this.dimensions.width + 120\n                        this.carSX[carX] = 665 + (Math.floor(Math.random() * 7)) * 95\n\n                    }\n                    \n                } \n            })\n\n\n\n        }\n\n\n\n\n    }\n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (Car);\n    \n    \n\n//# sourceURL=webpack:///./src/modules/car.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/modules/car.js\");\n/* harmony import */ var _bulbasaur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulbasaur */ \"./src/modules/bulbasaur.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ \"./src/modules/log.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ \"./src/modules/base.js\");\n\n\n\n\n\nclass BulbasaurAdventure {\n    constructor(canvas){\n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height }; \n        this.car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.dimensions)\n        this.bulbasaur = new _bulbasaur__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.dimensions)\n        this.log = new _log__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, this.dimensions)\n        this.base = new _base__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx)\n        this.draw();\n\n    }\n\n    drawBackground() {\n        this.ctx.fillStyle = '#9b7653';\n        this.ctx.fillRect(0, 0, 1090, 65);\n        this.ctx.fillRect(0, 330, 1090, 30);\n        this.ctx.fillRect(0, 660, 1090, 40);\n\n        this.ctx.fillStyle ='#4b8b3b';\n        this.ctx.fillRect(0, 0, 1090, 18)\n\n        this.ctx.fillStyle = '#474a51'\n        this.ctx.fillRect(0, 360, 1090, 300)\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 375);\n        this.ctx.lineTo(1090, 375);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([100, 5]);\n        this.ctx.lineWidth = 5;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 645);\n        this.ctx.lineTo(1090, 645);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([100, 5]);\n        this.ctx.lineWidth = 5;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 429);\n        this.ctx.lineTo(1090, 429);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 483);\n        this.ctx.lineTo(1090, 483);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 537);\n        this.ctx.lineTo(1090, 537);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(0, 591);\n        this.ctx.lineTo(1090, 591);\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.setLineDash([50, 30]);\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n\n        this.ctx.fillStyle = \"#0c7ecf\"\n        this.ctx.fillRect(0, 65, 1090, 270)\n\n    }\n\n    drawBush() {   \n        const bush = new Image();\n        bush.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/bush_sprite.png\"\n        this.ctx.drawImage(bush, 0, 0, 70, 70, -30, -20, 90, 105)\n        this.ctx.drawImage(bush, 70, 0, 70, 70, 30, -65, 90, 100)\n        this.ctx.drawImage(bush, 140, 0, 70, 70, 90, -20, 90, 105)\n        this.ctx.drawImage(bush, 210, 0, 70, 70, 150, -20, 90, 105)\n        this.ctx.drawImage(bush, 280, 0, 70, 70, 210, -20, 90, 105)\n        this.ctx.drawImage(bush, 350, 0, 70, 70, 270, -65, 90, 100)\n        this.ctx.drawImage(bush, 0, 0, 70, 70, 330, -20, 90, 105)\n        this.ctx.drawImage(bush, 70, 0, 70, 70, 390, -20, 90, 105)\n        this.ctx.drawImage(bush, 140, 0, 70, 70, 450, -20, 90, 105)\n        this.ctx.drawImage(bush, 210, 0, 70, 70, 510, -65, 90, 100)\n        this.ctx.drawImage(bush, 280, 0, 70, 70, 570, -20, 90, 105)\n        this.ctx.drawImage(bush, 350, 0, 70, 70, 630, -20, 90, 105)\n        this.ctx.drawImage(bush, 0, 0, 70, 70, 690, -20, 90, 105)\n        this.ctx.drawImage(bush, 70, 0, 70, 70, 750, -65, 90, 100)\n        this.ctx.drawImage(bush, 140, 0, 70, 70, 810, -20, 90, 105)\n        this.ctx.drawImage(bush, 210, 0, 70, 70, 870, -20, 90, 105)\n        this.ctx.drawImage(bush, 280, 0, 70, 70, 930, -20, 90, 105)\n        this.ctx.drawImage(bush, 350, 0, 70, 70, 990, -65, 90, 100)\n        this.ctx.drawImage(bush, 0, 0, 70, 70, 1050, -20, 90, 105)\n    }\n\n    drawGrass() {\n        const grass = new Image();\n        grass.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/grass_sprite.png\"\n        this.ctx.drawImage(grass, 100, 335, 35, 30)\n        this.ctx.drawImage(grass, 130, 335, 35, 30)\n        this.ctx.drawImage(grass, 300, 335, 35, 30)\n        this.ctx.drawImage(grass, 400, 335, 35, 30)\n        this.ctx.drawImage(grass, 700, 335, 35, 30)\n        this.ctx.drawImage(grass, 900, 335, 35, 30)\n        this.ctx.drawImage(grass, 120, 645, 35, 30)\n        this.ctx.drawImage(grass, 180, 645, 35, 30)\n        this.ctx.drawImage(grass, 350, 645, 35, 30)\n        this.ctx.drawImage(grass, 600, 645, 35, 30)\n        this.ctx.drawImage(grass, 630, 645, 35, 30)\n        this.ctx.drawImage(grass, 650, 645, 35, 30)\n        this.ctx.drawImage(grass, 750, 645, 35, 30)\n        this.ctx.drawImage(grass, 950, 645, 35, 30)\n    }\n\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)\n        this.registerEvents();\n\n        this.drawBackground();\n        \n        this.drawGrass();\n        this.base.drawBases();\n        this.drawBush();\n     \n        this.car.drawCars();\n        this.car.moveCars();\n        this.collision();\n        this.log.drawLogs();\n        this.log.moveLogs();\n        this.float();\n\n        this.bulbasaur.move();\n        this.bulbasaur.drawBulbasaur();\n\n        requestAnimationFrame(this.draw.bind(this));\n    }\n\n    registerEvents() {\n        document.addEventListener(\"keydown\", this.bulbasaur.handleKeyDown.bind(this), false);\n        document.addEventListener(\"keyup\", this.bulbasaur.handleKeyUp.bind(this), false)\n    }\n\n\n    collision() {\n        const carsX = Object.values(this.car.carsX)\n        const carsY = Object.values(this.car.carsY)\n        \n        let i;\n        for (i = 0; i < carsX.length; i++ ) {\n            if (carsX[i] <= this.bulbasaur.x + 50 && \n                carsX[i] + this.car.carWidth >= this.bulbasaur.x &&\n                carsY[i] + 50 >= this.bulbasaur.y &&\n                carsY[i] <= this.bulbasaur.y) {\n                this.bulbasaur.sx = 0\n                this.bulbasaur.x = 500\n                this.bulbasaur.y = 650\n            }\n\n        }\n\n    }\n\n    float() {\n        const logsX = Object.values(this.log.logsX)\n        const logsY = Object.values(this.log.logsY)\n        const logsXKeys = Object.keys(this.log.logsX)\n\n        let i;\n         \n            for (i = 0; i < logsX.length; i++ ) {\n           \n                if (logsX[i] <= this.bulbasaur.x &&\n                    logsX[i] + this.log.logWidth >= this.bulbasaur.x &&\n                    logsY[i] + this.log.logHeight > this.bulbasaur.y && \n                    logsY[i] <= this.bulbasaur.y) {\n                        \n                        if (['logX1', 'logX2'].includes(logsXKeys[i])) {\n                            if (this.bulbasaur.x < this.dimensions.width - 50) {\n                                this.bulbasaur.x = this.bulbasaur.x + this.log.mediumSpeed }\n                                return \n                        } else if (['logX5', 'logX6'].includes(logsXKeys[i])) {\n                            if (this.bulbasaur.x < this.dimensions.width - 50) {\n                                this.bulbasaur.x = this.bulbasaur.x + this.log.lowSpeed }\n                                return \n                        } else if (['logX3', 'logX4'].includes(logsXKeys[i])) {\n                            if (this.bulbasaur.x > 0) {\n                                this.bulbasaur.x = this.bulbasaur.x - this.log.mediumSpeed }\n                                return \n                        } else if (['logX7', 'logX8'].includes(logsXKeys[i])) {\n                            if (this.bulbasaur.x > 0) {\n                                this.bulbasaur.x = this.bulbasaur.x - this.log.lowSpeed }\n                                return\n                        } \n                \n                } \n\n            } \n            if (this.bulbasaur.y < 320 && this.bulbasaur.y > 65) {\n                        this.bulbasaur.sx = 0\n                        this.bulbasaur.x = 500\n                        this.bulbasaur.y = 650 \n            }\n            \n        \n\n       \n    }\n\n\n    gameOver() {\n    \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BulbasaurAdventure);\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/log.js":
/*!****************************!*\
  !*** ./src/modules/log.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Log {\n    constructor(ctx, dimensions) {\n        this.ctx = ctx\n        this.dimensions = dimensions\n        this.logsX = {  logX1: 400,\n                        logX2: 900, \n                        logX3: 300,\n                        logX4: 700,\n                        logX5: 200, \n                        logX6: 800,\n                        logX7: 100,\n                        logX8: 500\n                   \n                    }\n        this.logsY = { logY1: 50, \n                       logY2: 50, \n                       logY3: 110, \n                       logY4: 110, \n                       logY5: 170, \n                       logY6: 170, \n                       logY7: 235, \n                       logY8: 235\n                    };\n        this.logWidth = 270;\n        this.logHeight = 85\n        this.lowSpeed = 2\n        this.mediumSpeed = 3\n    }\n\n    drawLogs() {\n        const log = new Image();\n        log.src = \"https://we-camp-seeds.s3.us-east-2.amazonaws.com/logs.png\"\n        let i; \n        for (i = 0; i < 10; i++) {\n            this.ctx.drawImage(log, Object.values(this.logsX)[i], Object.values(this.logsY)[i], this.logWidth, this.logHeight)\n        }\n        \n    }\n\n  \n    moveLogs() {\n\n        ['logX1', 'logX2', 'logX5', 'logX6', 'logX3', 'logX4', 'logX7', 'logX8'].forEach(logX => {\n            if (['logX1', 'logX2'].includes(logX)) {\n                if (this.logsX[logX] < this.dimensions.width + 100) {\n                    this.logsX[logX] = this.logsX[logX] + this.mediumSpeed\n                } else {\n                    this.logsX[logX] = -this.logWidth\n                }\n            } else if (['logX5', 'logX6'].includes(logX)){\n                if (this.logsX[logX] < this.dimensions.width + 100) {\n                    this.logsX[logX] = this.logsX[logX] + this.lowSpeed\n                } else {\n                    this.logsX[logX] = -this.logWidth\n                }\n            } else if (['logX3', 'logX4'].includes(logX)) {\n                if (this.logsX[logX] > -this.logWidth) {\n                    this.logsX[logX] = this.logsX[logX] - this.mediumSpeed\n                } else {\n                    this.logsX[logX] = this.dimensions.width + 100\n                }\n            } else {\n                if (this.logsX[logX] > -this.logWidth) {\n                    this.logsX[logX] = this.logsX[logX] - this.lowSpeed\n                } else {\n                    this.logsX[logX] = this.dimensions.width + 100\n                }\n            }\n        })\n    }\n    \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Log);\n\n//# sourceURL=webpack:///./src/modules/log.js?");

/***/ })

/******/ });