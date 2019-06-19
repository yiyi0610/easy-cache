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
eval("\n\nvar _main = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.onload = function () {\n\n    function changeText() {\n\n        var i = 0;\n\n        var content = document.getElementById(\"argb\");\n\n        function count() {\n            content.innerHTML = i++;\n        }\n        content.onmouseover = _main2.default.throttol(count, 1000, 2);\n    }\n\n    function change() {\n        var content = document.getElementById(\"upload\");\n\n        //content.onchange = function(e){ console.log(\"xxx\",e); jsfunc.imageUpload(e);}\n        content.addEventListener(\"change\", function (e) {\n            _main2.default.imageUpload(e);\n        });\n    }\n    changeText();\n    change();\n};\n\n//# sourceURL=webpack:///./src/index2.js?");

 }),

 "./src/main.js":


 (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    bubbleSort: function bubbleSort(arr) {\n        for (var i = 0; i < arr.length - 1; i++) {\n            for (var j = i + 1; j < arr.length; j++) {\n                if (arr[i] < arr[j]) {\n                    var _ref = [arr[j], arr[i]];\n                    arr[i] = _ref[0];\n                    arr[j] = _ref[1];\n                }\n            }\n        }\n        return arr;\n    },\n\n    fastSort: function fastSort(arr) {\n        if (arr.length < 2) return arr;\n        var leftarr = [],\n            rightarr = [];\n        var q = arr[0];\n        for (var i = 1; i < arr.length; i++) {\n            if (q > arr[i]) {\n                leftarr.push(arr[i]);\n            } else {\n                rightarr.push(arr[i]);\n            }\n        }\n\n        return [].concat(this.fastSort(leftarr), q, this.fastSort(rightarr));\n    },\n\n    numsum: function numsum(nums, target) {\n        for (var i = 0; i < nums.length - 1; i++) {\n            for (var j = i + 1; j < nums.length; j++) {\n                var res = target - nums[i];\n                if (target - nums[i] == nums[j]) {\n                    console.log(\"the num is\", nums[j], 'and', nums[i]);\n                    return [i, j];\n                }\n            }\n        }\n\n        return false;\n    },\n\n    _once: function _once(f) {\n        var count = false;\n        return function () {\n            if (!count) {\n                count = true;\n                var arg = [].slice.call(arguments, 1);\n                f(arg);\n            }\n        };\n    },\n    _once2: function _once2(f) {\n        if (!f.prototype.hasonce && typeof f == 'function') {\n            f.prototype.hasonce = true;\n            var arg = [].slice.call(arguments, 1);\n            return f.apply(this, arg);\n        }\n    },\n\n    debounce: function debounce(func, wait, immediate) {\n        var timeOut = void 0;\n\n        return function () {\n            if (timeOut) {\n                clearTimeout(timeOut);\n            };\n            var context = this,\n                args = arguments;\n            if (immediate) {\n                timeOut = setTimeout(function () {\n\n                    //   func.apply(context,args);\n                    func();\n                }, wait);\n\n                if (!timeOut) {\n                    func();\n                };\n            } else {\n                timeOut = setTimeout(function () {\n\n                    //func.apply(context,args);\n                    func();\n                }, wait);\n            }\n        };\n    },\n    throttol: function throttol(func, wait, type) {\n        //type =1 定时器 type=2 时间戳\n\n        var perTime = Date.now(),\n            timeOut = void 0;\n        func();\n        return function () {\n            func();\n            if (type == 1) {\n                if (!timeOut) {\n                    timeOut = setTimeout(function () {\n                        func();\n                        timeOut = null;\n                    }, wait);\n                }\n            } else {\n                var nowtime = Date.now();\n                if (nowtime - perTime > wait) {\n                    func();\n                    perTime = nowtime;\n                }\n            }\n        };\n    },\n\n    imageUpload: function imageUpload(e) {\n        console.log(e);\n    }\n\n};\n\n//# sourceURL=webpack:///./src/main.js?");

 })

 });