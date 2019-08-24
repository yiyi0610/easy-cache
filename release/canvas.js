 (function(modules) {  	 	var installedModules = {};

 	 	function __webpack_require__(moduleId) {

 		 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		 		module.l = true;

 		 		return module.exports;
 	}


 	 	__webpack_require__.m = modules;

 	 	__webpack_require__.c = installedModules;

 	 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};

 	 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};

 	 	 	 	 	 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};

 	 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};

 	 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

 	 	__webpack_require__.p = "./release/";


 	 	return __webpack_require__(__webpack_require__.s = "./src/canvas.js");
 })

 ({

 "./src/canvas.js":


 (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar canvas = document.getElementById('myCanvas');\n\nfunction draw() {\n    var cxt = canvas.getContext('2d');\n\n    //   cxt.fillStyle = '#000'\n\n    cxt.beginPath();\n    cxt.arc(100, 100, 100, 100, 2 * Math.PI, true);\n}\n\n//# sourceURL=webpack:///./src/canvas.js?");

 })

 });