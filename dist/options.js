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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
/* 1 */
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
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].PROJECT_NAME]: null,
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
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].PROJECT_NAME]: null,
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].GITLAB_URL]: null
    },
    ({ API_KEY, PROJECT_NAME, GITLAB_URL }) => {
      $("#apiKey").val(API_KEY);
      $("#projectName").val(PROJECT_NAME);
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
    const projectName = $("#projectName").val();
    const gitlabURL = $("#gitlabURL").val();

    Object(__WEBPACK_IMPORTED_MODULE_0__storage__["c" /* saveOnStore */])({
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].API_KEY]: apiKey,
      [__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* KEYS */].PROJECT_NAME]: projectName,
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
      $("#projectName").val(null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmY2MGI3ZTQ5Y2E5NTY0YjE5NGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL29wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFUTs7Ozs7Ozs7OztBQ2RrQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsTUFBTSxvQ0FBb0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJmNjBiN2U0OWNhOTU2NGIxOTRkIiwiY29uc3QgS0VZUyA9IHtcbiAgQVBJX0tFWTogXCJBUElfS0VZXCIsXG4gIFBST0pFQ1RfTkFNRTogXCJQUk9KRUNUX05BTUVcIixcbiAgR0lUTEFCX1VSTDogXCJHSVRMQUJfVVJMXCJcbn07XG5cbmZ1bmN0aW9uIHNhdmVPblN0b3JlKG9iaiwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChvYmosIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJvbVN0b3JlKG9iaiwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChvYmosIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IHsgS0VZUywgc2F2ZU9uU3RvcmUsIGdldEZyb21TdG9yZSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3RvcmFnZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IEtFWVMsIHNhdmVPblN0b3JlLCBnZXRGcm9tU3RvcmUgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbi8qKlxuICogQ2xlYXIgdGhlIHN0b3JhZ2UgYW5kIGV4ZWMgYSBjYWxsYmFja1xuICovXG5mdW5jdGlvbiBjbGVhclN0b3JhZ2UoY2FsbGJhY2spIHtcbiAgc2F2ZU9uU3RvcmUoXG4gICAge1xuICAgICAgW0tFWVMuQVBJX0tFWV06IG51bGwsXG4gICAgICBbS0VZUy5QUk9KRUNUX05BTUVdOiBudWxsLFxuICAgICAgW0tFWVMuR0lUTEFCX1VSTF06IG51bGxcbiAgICB9LFxuICAgIGNhbGxiYWNrXG4gICk7XG59XG5cbi8qKlxuICogR2V0IG9wdGlvbnMgZnJvbSBzdG9yYWdlIGFuZCBmaWxsIHRoZSBmb3JtXG4gKi9cbmZ1bmN0aW9uIGluaXRGb3JtKCkge1xuICBnZXRGcm9tU3RvcmUoXG4gICAge1xuICAgICAgW0tFWVMuQVBJX0tFWV06IG51bGwsXG4gICAgICBbS0VZUy5QUk9KRUNUX05BTUVdOiBudWxsLFxuICAgICAgW0tFWVMuR0lUTEFCX1VSTF06IG51bGxcbiAgICB9LFxuICAgICh7IEFQSV9LRVksIFBST0pFQ1RfTkFNRSwgR0lUTEFCX1VSTCB9KSA9PiB7XG4gICAgICAkKFwiI2FwaUtleVwiKS52YWwoQVBJX0tFWSk7XG4gICAgICAkKFwiI3Byb2plY3ROYW1lXCIpLnZhbChQUk9KRUNUX05BTUUpO1xuICAgICAgJChcIiNnaXRsYWJVUkxcIikudmFsKEdJVExBQl9VUkwpO1xuICAgIH1cbiAgKTtcbn1cblxuLyoqXG4gKiBTYXZlIG9wdGlvbnMgcGFyYW1ldGVycyBcbiAqL1xuZnVuY3Rpb24gYXR0YWNjaFNhdmVIYW5kbGVyKCkge1xuICAkKFwiI29wdGlvbnMtZm9ybVwiKS5vbihcInN1Ym1pdFwiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYXBpS2V5ID0gJChcIiNhcGlLZXlcIikudmFsKCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSAkKFwiI3Byb2plY3ROYW1lXCIpLnZhbCgpO1xuICAgIGNvbnN0IGdpdGxhYlVSTCA9ICQoXCIjZ2l0bGFiVVJMXCIpLnZhbCgpO1xuXG4gICAgc2F2ZU9uU3RvcmUoe1xuICAgICAgW0tFWVMuQVBJX0tFWV06IGFwaUtleSxcbiAgICAgIFtLRVlTLlBST0pFQ1RfTkFNRV06IHByb2plY3ROYW1lLFxuICAgICAgW0tFWVMuR0lUTEFCX1VSTF06IGdpdGxhYlVSTFxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDbGVhciBmb3JtIGFuZCBzdG9yYWdlIGZyb20gc2F2ZWQgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBhdHRhY2hDbGVhckhhbmRsZXIoKSB7XG4gICQoXCIjZGVsZXRlLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbGVhclN0b3JhZ2UoKCkgPT4ge1xuICAgICAgJChcIiNhcGlLZXlcIikudmFsKG51bGwpO1xuICAgICAgJChcIiNwcm9qZWN0TmFtZVwiKS52YWwobnVsbCk7XG4gICAgICAkKFwiI2dpdGxhYlVSTFwiKS52YWwobnVsbCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAkKHdpbmRvdykub24oXCJsb2FkXCIsICgpID0+IHtcbiAgICBpbml0Rm9ybSgpO1xuICAgIGF0dGFjY2hTYXZlSGFuZGxlcigpO1xuICAgIGF0dGFjaENsZWFySGFuZGxlcigpO1xuICB9KTtcbn1cblxuaW5pdCgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9