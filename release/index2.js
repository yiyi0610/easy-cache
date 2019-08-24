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


 	 	return __webpack_require__(__webpack_require__.s = "./src/index2.js");
 })

 ({

 "./src/index2.js":


 (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _main = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './main'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _main2 = _interopRequireDefault(_main);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.onload = function () {\n\n    function changeText() {\n\n        var i = 0;\n\n        var content = document.getElementById(\"argb\");\n\n        function count() {\n            content.innerHTML = i++;\n        }\n        content.onmouseover = _main2.default.throttol(count, 1000, 2);\n    }\n\n    function change() {\n        var content = document.getElementById(\"upload\");\n        var img = document.getElementById('img');\n\n        content.addEventListener(\"change\", function (e) {\n            _main2.default.imageUpload(e, setSrc);\n        });\n    }\n\n    function setSrc(imgpath) {\n        img.setAttribute('src', imgpath);\n    }\n\n    function drawImage() {\n        var myCanvas = doucment.getElementById(\"myCanvas\");\n        if (myCanvas.getContext) {\n            var ctx = myCanvas.getContext('2d');\n            //  ctx.\n            ctx.beginPath();\n            ctx.moveTo(0, 0);\n            ctx.lineTo(0, 50);\n            ctx.lineTo(50, 0);\n            ctx.closePath();\n        }\n    }\n    changeText();\n    change();\n    drawImage();\n};\n\n//# sourceURL=webpack:///./src/index2.js?");

 })

 });