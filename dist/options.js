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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(0);


/**
 * Clear the storage and exec a callback
 */
function clearStorage(callback) {
  Object(__WEBPACK_IMPORTED_MODULE_0__storage__["c" /* saveOnStore */])(
    {
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].API_KEY]: null,
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].GITLAB_URL]: null
    },
    callback
  );
}

/**
 * Get options from storage and fill the form
 */
function initForm() {
  Object(__WEBPACK_IMPORTED_MODULE_0__storage__["b" /* getFromStore */])(
    {
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].API_KEY]: null,
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].GITLAB_URL]: null
    },
    ({ API_KEY, GITLAB_URL }) => {
      $("#apiKey").val(API_KEY);
      $("#gitlabURL").val(GITLAB_URL);
    }
  );
}

/**
 * Save options parameters 
 */
function attacchSaveHandler() {
  $("#options-form").on("submit", e => {
    e.preventDefault();
    const apiKey = $("#apiKey").val();
    const gitlabURL = $("#gitlabURL").val();

    Object(__WEBPACK_IMPORTED_MODULE_0__storage__["c" /* saveOnStore */])({
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].API_KEY]: apiKey,
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].GITLAB_URL]: gitlabURL
    });
  });
}

/**
 * Clear form and storage from saved options
 */
function attachClearHandler() {
  $("#delete-button").on("click", e => {
    e.preventDefault();
    clearStorage(() => {
      $("#apiKey").val(null);
      $("#gitlabURL").val(null);
    });
  });
}

function init() {
  $(window).on("load", () => {
    initForm();
    attacchSaveHandler();
    attachClearHandler();
  });
}

init();


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWQwZTZlNzJhYjdhMmZjODlkMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFUTs7Ozs7Ozs7Ozs7QUNka0M7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTSxzQkFBc0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwiZmlsZSI6Im9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZDBlNmU3MmFiN2EyZmM4OWQzNSIsImNvbnN0IEtFWVMgPSB7XG4gIEFQSV9LRVk6IFwiQVBJX0tFWVwiLFxuICBQUk9KRUNUX05BTUU6IFwiUFJPSkVDVF9OQU1FXCIsXG4gIEdJVExBQl9VUkw6IFwiR0lUTEFCX1VSTFwiXG59O1xuXG5mdW5jdGlvbiBzYXZlT25TdG9yZShvYmosIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQob2JqLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGdldEZyb21TdG9yZShvYmosIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQob2JqLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCB7IEtFWVMsIHNhdmVPblN0b3JlLCBnZXRGcm9tU3RvcmUgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3N0b3JhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBLRVlTLCBzYXZlT25TdG9yZSwgZ2V0RnJvbVN0b3JlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG4vKipcbiAqIENsZWFyIHRoZSBzdG9yYWdlIGFuZCBleGVjIGEgY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKGNhbGxiYWNrKSB7XG4gIHNhdmVPblN0b3JlKFxuICAgIHtcbiAgICAgIFtLRVlTLkFQSV9LRVldOiBudWxsLFxuICAgICAgW0tFWVMuR0lUTEFCX1VSTF06IG51bGxcbiAgICB9LFxuICAgIGNhbGxiYWNrXG4gICk7XG59XG5cbi8qKlxuICogR2V0IG9wdGlvbnMgZnJvbSBzdG9yYWdlIGFuZCBmaWxsIHRoZSBmb3JtXG4gKi9cbmZ1bmN0aW9uIGluaXRGb3JtKCkge1xuICBnZXRGcm9tU3RvcmUoXG4gICAge1xuICAgICAgW0tFWVMuQVBJX0tFWV06IG51bGwsXG4gICAgICBbS0VZUy5HSVRMQUJfVVJMXTogbnVsbFxuICAgIH0sXG4gICAgKHsgQVBJX0tFWSwgR0lUTEFCX1VSTCB9KSA9PiB7XG4gICAgICAkKFwiI2FwaUtleVwiKS52YWwoQVBJX0tFWSk7XG4gICAgICAkKFwiI2dpdGxhYlVSTFwiKS52YWwoR0lUTEFCX1VSTCk7XG4gICAgfVxuICApO1xufVxuXG4vKipcbiAqIFNhdmUgb3B0aW9ucyBwYXJhbWV0ZXJzIFxuICovXG5mdW5jdGlvbiBhdHRhY2NoU2F2ZUhhbmRsZXIoKSB7XG4gICQoXCIjb3B0aW9ucy1mb3JtXCIpLm9uKFwic3VibWl0XCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhcGlLZXkgPSAkKFwiI2FwaUtleVwiKS52YWwoKTtcbiAgICBjb25zdCBnaXRsYWJVUkwgPSAkKFwiI2dpdGxhYlVSTFwiKS52YWwoKTtcblxuICAgIHNhdmVPblN0b3JlKHtcbiAgICAgIFtLRVlTLkFQSV9LRVldOiBhcGlLZXksXG4gICAgICBbS0VZUy5HSVRMQUJfVVJMXTogZ2l0bGFiVVJMXG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENsZWFyIGZvcm0gYW5kIHN0b3JhZ2UgZnJvbSBzYXZlZCBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGF0dGFjaENsZWFySGFuZGxlcigpIHtcbiAgJChcIiNkZWxldGUtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsZWFyU3RvcmFnZSgoKSA9PiB7XG4gICAgICAkKFwiI2FwaUtleVwiKS52YWwobnVsbCk7XG4gICAgICAkKFwiI2dpdGxhYlVSTFwiKS52YWwobnVsbCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAkKHdpbmRvdykub24oXCJsb2FkXCIsICgpID0+IHtcbiAgICBpbml0Rm9ybSgpO1xuICAgIGF0dGFjY2hTYXZlSGFuZGxlcigpO1xuICAgIGF0dGFjaENsZWFySGFuZGxlcigpO1xuICB9KTtcbn1cblxuaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9