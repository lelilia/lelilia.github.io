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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst Square = __webpack_require__(/*! ./square */ \"./src/square.js\")\n\nconst NUMBER_OF_SQUARES = 4\n\nfunction Game() {\n  this.squares = []\n  this.events = {}\n}\n\nGame.prototype.newGame = function newGame() {\n  this.squares = []\n  for (let row = 0; row < NUMBER_OF_SQUARES; row++) {\n    for (let col = 0; col < NUMBER_OF_SQUARES; col++){\n      this.squares.push(new Square(row, col))\n    }\n  }\n  // two new vals \n  this.fillRandomEmptySquare()\n  this.fillRandomEmptySquare()\n  this.emit(\"draw\")\n}\n\nGame.prototype.findEmptySquares = function findEmptySquares() {\n  const emptySquares = []\n  for (const square of this.squares) {\n    if (square.val === 0) {\n      emptySquares.push(square.row * NUMBER_OF_SQUARES + square.col)\n    }\n  }\n  return emptySquares\n}\n\nGame.prototype.getSquare = function getSquare(row, col) {\n  return this.squares[row * NUMBER_OF_SQUARES + col]\n}\n\nGame.prototype.fillRandomEmptySquare = function fillRandomEmptySquare() {\n  const emptySquares = this.findEmptySquares()\n  const indexEmptySquare = emptySquares[~~(Math.random() * emptySquares.length)]\n  let randomNewValue = Math.random()\n  if (randomNewValue > 0.99) {\n    randomNewValue = 8\n  }\n  else if (randomNewValue > 0.8) {\n    randomNewValue = 4\n  }\n  else {\n    randomNewValue = 2\n  }\n  this.squares[indexEmptySquare].set(randomNewValue)\n  this.emit(\"new\", indexEmptySquare)\n}\n\nGame.prototype.isGameLost = function isGameLost() {\n  const emptySquares = this.findEmptySquares()\n  if (emptySquares.length !== 0) {\n    return false\n  }\n  const arrayOfValues = []\n  for (const square of this.squares) {\n    arrayOfValues.push(square.val)\n  }\n  for (let row = 0; row < NUMBER_OF_SQUARES; row++) {\n    for (let col = 0; col < NUMBER_OF_SQUARES - 1; col++) {\n      const index = row * NUMBER_OF_SQUARES + col\n      console.log(\"index:\", index)\n      console.log(\"row:\", row, \"col:\" , col)\n      if (arrayOfValues[index] === arrayOfValues[index+1] || arrayOfValues[index] === arrayOfValues[index + NUMBER_OF_SQUARES]){\n        console.log(index, arrayOfValues[index])\n        return false\n      }\n    }\n    if (arrayOfValues[row * NUMBER_OF_SQUARES + 3] === arrayOfValues[(row + 1) * NUMBER_OF_SQUARES + 3]) {\n      return false\n    }\n  }\n  return true\n}\n\n\nGame.prototype.emit = function emit(eventName, param = 0) {\n  if (eventName in this.events) {\n    for (const f of this.events[eventName]) {\n      f(param)\n    }\n  }\n}\n\nGame.prototype.on = function on(eventName, cb) {\n  if (!(eventName in this.events)){\n    this.events[eventName] = []\n  }\n  this.events[eventName].push(cb)\n}\n\nGame.prototype.handleStack = function handleStack(arr) {\n  let changeBool = false\n  let merges = new Array(NUMBER_OF_SQUARES)\n  for (let i = 0; i < NUMBER_OF_SQUARES; i++) {\n    if (arr[i] === 0) {\n      for (let j = i+1; j < NUMBER_OF_SQUARES; j++) {\n        if (arr[j] !== 0) {\n          arr[i] = arr[j]\n          arr[j] = 0\n          changeBool = true\n          break\n        }\n      }\n    }\n    if (arr[i] !== 0) {\n      for (let j = i + 1; j < NUMBER_OF_SQUARES; j++) {\n        if (arr[i] === arr[j]){\n          arr[i] *= 2\n          arr[j] = 0\n          changeBool = true\n          merges[i] = 1\n          break\n        }\n        else if (arr[j] !== 0) {\n          break\n        }\n      }\n    }\n  }\n  return [changeBool, arr, merges]\n}\n\nGame.prototype.move = function move(direction) {\n  this.emit(\"clearClass\")\n  let somethingHappend = false\n  if (direction === \"right\" || direction === \"left\"){\n    \n    for (let row = 0; row < NUMBER_OF_SQUARES; row++) {\n      let arr = []\n      for (let col = 0; col < NUMBER_OF_SQUARES; col++) {\n        arr.push(this.getSquare(row,col).val)\n      }\n      if (direction === \"right\") {\n        arr = arr.reverse()\n      }\n      let [bool, newArr, merges] = this.handleStack(arr)\n      if (bool) {\n        if (direction === \"right\"){\n          newArr = newArr.reverse()\n          merges = merges.reverse()\n        }\n        somethingHappend = true\n        for (let col = 0; col < NUMBER_OF_SQUARES; col++) {\n          this.getSquare(row,col).set(newArr[col])\n          if (merges[col] === 1){\n            this.emit(\"merged\", [row, col])\n          }\n        }\n      }\n    }\n  }\n  else {\n    // up down\n    for (let col = 0; col < NUMBER_OF_SQUARES; col++) {\n      let arr = []\n      for (let row = 0; row < NUMBER_OF_SQUARES; row++) {\n        arr.push(this.getSquare(row,col).val)\n      }\n      if (direction == \"down\"){\n        arr = arr.reverse()\n      }\n      let [bool, newArr, merges] = this.handleStack(arr)\n      if (bool){\n        if (direction == \"down\") {\n          newArr = newArr.reverse()\n          merges = merges.reverse()\n        }\n        somethingHappend = true\n        for (let row = 0; row < NUMBER_OF_SQUARES; row++) {\n          this.getSquare(row,col).set(newArr[row])\n          if (merges[row] === 1) {\n            this.emit(\"merged\", [row,col])\n          }\n        }\n      }\n    }\n  }\n  if (somethingHappend) {\n    this.fillRandomEmptySquare()\n  }\n  this.emit(\"draw\")\n}\n\n\n\n\nmodule.exports = Game\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst NUMBER_OF_SQUARES = 4\n\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const game = new Game()\n  const elements = {\n    squares: document.querySelectorAll(\".board-square\")\n  }\n\n  game.on(\"draw\", () => {\n    \n    for (const index in game.squares) {\n      if (game.squares[index].val !== 0) {\n        elements.squares[index].innerText = game.squares[index].val\n      }\n      else {\n        elements.squares[index].innerText = \"\"\n      }\n      elements.squares[index].setAttribute(\"data-value\", game.squares[index].val)\n    }\n    const gameLost = game.isGameLost()\n    if (gameLost) {\n      alert(\"You have lost\")\n      game.newGame()\n    }\n  })\n\n  game.on(\"merged\", ([row, col]) => {\n    const index = row * NUMBER_OF_SQUARES + col \n    elements.squares[index].classList.add(\"merged\")\n  })\n\n  game.on(\"new\", (index) => {\n    elements.squares[index].classList.add(\"new\")\n  })\n\n  game.on(\"clearClass\", () => {\n    for (const square of elements.squares) {\n      square.classList.remove(\"new\")\n      square.classList.remove(\"merged\")\n    }\n  })\n\n\n  game.newGame()\n  document.addEventListener(\"keydown\", (key) => {\n    key.preventDefault()\n    if (key.key === \"ArrowRight\") {\n      game.move(\"right\")\n    }\n    else if (key.key === \"ArrowLeft\") {\n      game.move(\"left\")\n    }\n    else if (key.key === \"ArrowUp\") {\n      game.move(\"up\")\n    }\n    else if (key.key === \"ArrowDown\") {\n      game.move(\"down\")\n    }\n  })\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/square.js":
/*!***********************!*\
  !*** ./src/square.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Square(row, col) {\n  this.col = col,\n  this.row = row,\n  this.val = 0\n  this.events = {}\n}\n\nSquare.prototype.clear = function clear() {\n  this.val = 0\n}\n\nSquare.prototype.set = function set(val) {\n  this.val = val\n}\n\nSquare.prototype.emit = function emit(eventName, param) {\n  if (eventName in this.events) {\n    for (const f of this.events[eventName]) {\n      f(param)\n    }\n  }\n}\n\nSquare.prototype.on = function on(eventName, cb) {\n  if (!(eventName in this.events)) {\n    this.events[eventName] = []\n  }\n  this.events[eventName].push(cb)\n}\n\nmodule.exports = Square\n\n//# sourceURL=webpack:///./src/square.js?");

/***/ })

/******/ });
