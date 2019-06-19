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


 	 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })

 ({

 "./src/index.js":


 (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar easyCache = {\n    cacheObj: {\n        url: '',\n        expire: new Date() + 60 * 60 * 100,\n        unique: ''\n    },\n    getUrl: function getUrl(url) {\n        var promise = new Promise(function (resolve, reject) {\n\n            var xhr = new XMLHttpRequest();\n            xhr.open('GET', url);\n\n            xhr.onreadystatechange = function () {\n                if (xhr.readyState === 4) {\n                    if (xhr.status === 200 || xhr.status === 0 && xhr.responseText) {\n                        resolve({\n                            content: xhr.responseText,\n                            type: xhr.getResponseHeader('content-type')\n                        });\n                    } else {\n                        reject(new Error(xhr.statusText));\n                    }\n                }\n            };\n\n            // By default XHRs never timeout, and even Chrome doesn't implement the\n            // spec for xhr.timeout. So we do it ourselves.\n            setTimeout(function () {\n                if (xhr.readyState < 4) {\n                    xhr.abort();\n                }\n            }, 1000);\n\n            xhr.send();\n        });\n\n        return promise;\n    },\n    injectScript: function injectScript(obj) {\n        var head = document.head || document.getElementsByTagName('head')[0];\n        var script = document.createElement('script');\n        script.defer = true;\n        script.text = obj;\n        head.appendChild(script);\n    },\n    setKey: function setKey(url) {\n        var urlArr = url.split('/'),\n            len = urlArr.length;\n        return \"easycache-\" + urlArr[len - 1];\n    },\n    checkHasScript: function checkHasScript(url) {\n        return localStorage.getItem(this.setKey(url));\n    },\n    checkIsOvertime: function checkIsOvertime() {},\n\n    set: function set(obj) {\n        var _this = this;\n\n        obj = obj || cacheObj;\n        if (obj.constructor == Array) {\n            var len = obj.length,\n                i = 0;\n\n            var _loop = function _loop() {\n                var newurl = obj[i].url;\n                _this.getUrl(obj[i].url).then(function (res) {\n                    var content = res.content,\n                        data = {\n                        url: newurl,\n                        text: content,\n                        expire: '',\n                        unique: ''\n                    };\n                    if (_this.checkHasScript(newurl)) {\n                        _this.injectScript(content);\n                    } else {\n                        localStorage.setItem(_this.setKey(newurl), JSON.stringify(data));\n                    }\n                }).catch(function (err) {});\n            };\n\n            for (i = 0; i < len; i++) {\n                _loop();\n            }\n        } else {\n            this.getUrl(obj.url).then(function (res) {\n                var content = res.content,\n                    data = {\n                    url: obj.url,\n                    text: content,\n                    expire: '',\n                    unique: ''\n                };\n                if (_this.checkHasScript(obj.url)) {\n                    _this.injectScript(content);\n                } else {\n                    localStorage.setItem(_this.setKey(obj.url), JSON.stringify(data));\n                }\n            }).catch(function (err) {});\n        }\n    }\n};\n\nwindow.easyCache = easyCache;\n\n//# sourceURL=webpack:///./src/index.js?");

 })

 });