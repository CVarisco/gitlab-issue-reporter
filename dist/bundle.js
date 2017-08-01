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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return saveOnStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFromStore; });
const KEYS = {
  API_KEY: "API_KEY",
  PROJECT_NAME: "PROJECT_NAME",
  GITLAB_URL: "GITLAB_URL"
};

function saveOnStore(obj, callback = () => {}) {
  chrome.storage.sync.set(obj, callback);
}

function getFromStore(obj, callback = () => {}) {
  chrome.storage.sync.get(obj, callback);
}




/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(0);


function getOptions() {
  Object(__WEBPACK_IMPORTED_MODULE_0__storage__["b" /* getFromStore */])(
    {
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].API_KEY]: null,
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].GITLAB_URL]: null
    },
    ({ API_KEY, GITLAB_URL }) => {
      if (!API_KEY || !GITLAB_URL) {
        $("#overlay-error").addClass("active");
      }
    }
  );
}

function initForm() {
  Object(__WEBPACK_IMPORTED_MODULE_0__storage__["b" /* getFromStore */])(
    {
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].ISSUE_TITLE]: null,
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].ISSUE_DESCRIPTION]: null,
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].ISSUE_PROJECT]: null,
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].ISSUE_LABELS]: null
    },
    ({ ISSUE_TITLE, ISSUE_DESCRIPTION, ISSUE_PROJECT, ISSUE_LABELS }) => {
      $("#title").val(ISSUE_TITLE);
      $("#description").val(ISSUE_DESCRIPTION);
      $("#project").val(ISSUE_PROJECT);
      $("#labels").val(ISSUE_LABELS);
    }
  );
}

function connectPort() {
  const port = chrome.extension.connect({
    name: "Sample Communication"
  });
}

function init() {
  $(window).on("load", () => {
    connectPort();
    initForm();
  });
}

init();


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzZiN2FjZmNmNTI0N2Y5ZDBlYzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFUTs7Ozs7Ozs7Ozs7O0FDZGtDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU0sc0JBQXNCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLDhEQUE4RDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzZiN2FjZmNmNTI0N2Y5ZDBlYzIiLCJjb25zdCBLRVlTID0ge1xuICBBUElfS0VZOiBcIkFQSV9LRVlcIixcbiAgUFJPSkVDVF9OQU1FOiBcIlBST0pFQ1RfTkFNRVwiLFxuICBHSVRMQUJfVVJMOiBcIkdJVExBQl9VUkxcIlxufTtcblxuZnVuY3Rpb24gc2F2ZU9uU3RvcmUob2JqLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KG9iaiwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBnZXRGcm9tU3RvcmUob2JqLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KG9iaiwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgeyBLRVlTLCBzYXZlT25TdG9yZSwgZ2V0RnJvbVN0b3JlIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdG9yYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJpbXBvcnQgeyBLRVlTLCBzYXZlT25TdG9yZSwgZ2V0RnJvbVN0b3JlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICBnZXRGcm9tU3RvcmUoXG4gICAge1xuICAgICAgW0tFWVMuQVBJX0tFWV06IG51bGwsXG4gICAgICBbS0VZUy5HSVRMQUJfVVJMXTogbnVsbFxuICAgIH0sXG4gICAgKHsgQVBJX0tFWSwgR0lUTEFCX1VSTCB9KSA9PiB7XG4gICAgICBpZiAoIUFQSV9LRVkgfHwgIUdJVExBQl9VUkwpIHtcbiAgICAgICAgJChcIiNvdmVybGF5LWVycm9yXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gaW5pdEZvcm0oKSB7XG4gIGdldEZyb21TdG9yZShcbiAgICB7XG4gICAgICBbS0VZUy5JU1NVRV9USVRMRV06IG51bGwsXG4gICAgICBbS0VZUy5JU1NVRV9ERVNDUklQVElPTl06IG51bGwsXG4gICAgICBbS0VZUy5JU1NVRV9QUk9KRUNUXTogbnVsbCxcbiAgICAgIFtLRVlTLklTU1VFX0xBQkVMU106IG51bGxcbiAgICB9LFxuICAgICh7IElTU1VFX1RJVExFLCBJU1NVRV9ERVNDUklQVElPTiwgSVNTVUVfUFJPSkVDVCwgSVNTVUVfTEFCRUxTIH0pID0+IHtcbiAgICAgICQoXCIjdGl0bGVcIikudmFsKElTU1VFX1RJVExFKTtcbiAgICAgICQoXCIjZGVzY3JpcHRpb25cIikudmFsKElTU1VFX0RFU0NSSVBUSU9OKTtcbiAgICAgICQoXCIjcHJvamVjdFwiKS52YWwoSVNTVUVfUFJPSkVDVCk7XG4gICAgICAkKFwiI2xhYmVsc1wiKS52YWwoSVNTVUVfTEFCRUxTKTtcbiAgICB9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RQb3J0KCkge1xuICBjb25zdCBwb3J0ID0gY2hyb21lLmV4dGVuc2lvbi5jb25uZWN0KHtcbiAgICBuYW1lOiBcIlNhbXBsZSBDb21tdW5pY2F0aW9uXCJcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICQod2luZG93KS5vbihcImxvYWRcIiwgKCkgPT4ge1xuICAgIGNvbm5lY3RQb3J0KCk7XG4gICAgaW5pdEZvcm0oKTtcbiAgfSk7XG59XG5cbmluaXQoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==