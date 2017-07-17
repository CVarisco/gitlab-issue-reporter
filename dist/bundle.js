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
const StorageKeys = {
  API_KEY: "API_KEY",
  PROJECT_SELECTED: "PROJECT_SELECTED"
};

class Storage {
  constructor(name = "localStorage") {
    this.store = window[name];

    // Utility declarations
    this.stringify = JSON.stringify;
    this.toJSON = JSON.parse;
    // Constant name of the entity array where we store all entities key
    this.KEY_LIST_NAME = "KEY_LIST";
  }

  //  Set items in store with key and data
  storeSetItems(key, data) {
    const transformed = this.stringify(data);
    this.store.setItem(key, transformed);
  }

  // Add key to the entity KEY_LIST_NAME
  addKeyToList(key) {
    const keyList = this.get(this.KEY_LIST_NAME) || [];
    // If exist, don't do anything
    if (keyList.length > 0 && keyList.indexOf(key) > -1) {
      return;
    }
    keyList.push(key);
    // I can't use set() function, because this create a infinite loop
    this.storeSetItems(this.KEY_LIST_NAME, keyList);
  }

  // Remove key from the entity KEY_LIST_NAME
  removeKeyToList(key) {
    const keyList = this.get(this.KEY_LIST_NAME);
    if (!keyList) {
      return;
    }
    // Security check
    if (keyList.length === 0) {
      return;
    }
    // Search key on KeyList Array
    const indexOfKey = keyList.indexOf(key);
    // Security check
    if (indexOfKey > -1) {
      keyList.splice(indexOfKey, 1);
    }

    // I can't use set() function, because this create a infinite loop
    this.storeSetItems(this.KEY_LIST_NAME, keyList);
  }

  // Set data into entity with name key
  set(key, data) {
    this.storeSetItems(key, data);
    // For "list" functionality
    this.addKeyToList(key);
  }

  // Get data from entity with name key
  get(key) {
    const data = this.store.getItem(key);
    return data ? this.toJSON(data) : undefined;
  }

  // Remove entire entity from the store with name key
  remove(key) {
    this.store.removeItem(key);
    this.removeKeyToList(key);
  }

  // Return the list of keys present in the store
  list() {
    return this.get(this.KEY_LIST_NAME);
  }

  // Return boolean if exist the key and the data
  exist(key) {
    const data = this.get(key);
    return !!data;
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (Storage);


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(0);


const GIR = {
  init() {
    $(window).on("load", () => {
      $("select.dropdown").dropdown();
    });
  }
};

$("#submit").on("click", () => {
  chrome.storage.sync.get(
    {
      apikey: null,
      projectName: null,
      gitlabUrl: null
    },
    function(items) {
      console.log(items);
    }
  );
});

GIR.init();


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY0NjY5N2NmMzg4ZTRjYWNjMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NjQ2Njk3Y2YzODhlNGNhY2MzNyIsImNvbnN0IFN0b3JhZ2VLZXlzID0ge1xuICBBUElfS0VZOiBcIkFQSV9LRVlcIixcbiAgUFJPSkVDVF9TRUxFQ1RFRDogXCJQUk9KRUNUX1NFTEVDVEVEXCJcbn07XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcihuYW1lID0gXCJsb2NhbFN0b3JhZ2VcIikge1xuICAgIHRoaXMuc3RvcmUgPSB3aW5kb3dbbmFtZV07XG5cbiAgICAvLyBVdGlsaXR5IGRlY2xhcmF0aW9uc1xuICAgIHRoaXMuc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnk7XG4gICAgdGhpcy50b0pTT04gPSBKU09OLnBhcnNlO1xuICAgIC8vIENvbnN0YW50IG5hbWUgb2YgdGhlIGVudGl0eSBhcnJheSB3aGVyZSB3ZSBzdG9yZSBhbGwgZW50aXRpZXMga2V5XG4gICAgdGhpcy5LRVlfTElTVF9OQU1FID0gXCJLRVlfTElTVFwiO1xuICB9XG5cbiAgLy8gIFNldCBpdGVtcyBpbiBzdG9yZSB3aXRoIGtleSBhbmQgZGF0YVxuICBzdG9yZVNldEl0ZW1zKGtleSwgZGF0YSkge1xuICAgIGNvbnN0IHRyYW5zZm9ybWVkID0gdGhpcy5zdHJpbmdpZnkoZGF0YSk7XG4gICAgdGhpcy5zdG9yZS5zZXRJdGVtKGtleSwgdHJhbnNmb3JtZWQpO1xuICB9XG5cbiAgLy8gQWRkIGtleSB0byB0aGUgZW50aXR5IEtFWV9MSVNUX05BTUVcbiAgYWRkS2V5VG9MaXN0KGtleSkge1xuICAgIGNvbnN0IGtleUxpc3QgPSB0aGlzLmdldCh0aGlzLktFWV9MSVNUX05BTUUpIHx8IFtdO1xuICAgIC8vIElmIGV4aXN0LCBkb24ndCBkbyBhbnl0aGluZ1xuICAgIGlmIChrZXlMaXN0Lmxlbmd0aCA+IDAgJiYga2V5TGlzdC5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBrZXlMaXN0LnB1c2goa2V5KTtcbiAgICAvLyBJIGNhbid0IHVzZSBzZXQoKSBmdW5jdGlvbiwgYmVjYXVzZSB0aGlzIGNyZWF0ZSBhIGluZmluaXRlIGxvb3BcbiAgICB0aGlzLnN0b3JlU2V0SXRlbXModGhpcy5LRVlfTElTVF9OQU1FLCBrZXlMaXN0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBrZXkgZnJvbSB0aGUgZW50aXR5IEtFWV9MSVNUX05BTUVcbiAgcmVtb3ZlS2V5VG9MaXN0KGtleSkge1xuICAgIGNvbnN0IGtleUxpc3QgPSB0aGlzLmdldCh0aGlzLktFWV9MSVNUX05BTUUpO1xuICAgIGlmICgha2V5TGlzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZWN1cml0eSBjaGVja1xuICAgIGlmIChrZXlMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZWFyY2gga2V5IG9uIEtleUxpc3QgQXJyYXlcbiAgICBjb25zdCBpbmRleE9mS2V5ID0ga2V5TGlzdC5pbmRleE9mKGtleSk7XG4gICAgLy8gU2VjdXJpdHkgY2hlY2tcbiAgICBpZiAoaW5kZXhPZktleSA+IC0xKSB7XG4gICAgICBrZXlMaXN0LnNwbGljZShpbmRleE9mS2V5LCAxKTtcbiAgICB9XG5cbiAgICAvLyBJIGNhbid0IHVzZSBzZXQoKSBmdW5jdGlvbiwgYmVjYXVzZSB0aGlzIGNyZWF0ZSBhIGluZmluaXRlIGxvb3BcbiAgICB0aGlzLnN0b3JlU2V0SXRlbXModGhpcy5LRVlfTElTVF9OQU1FLCBrZXlMaXN0KTtcbiAgfVxuXG4gIC8vIFNldCBkYXRhIGludG8gZW50aXR5IHdpdGggbmFtZSBrZXlcbiAgc2V0KGtleSwgZGF0YSkge1xuICAgIHRoaXMuc3RvcmVTZXRJdGVtcyhrZXksIGRhdGEpO1xuICAgIC8vIEZvciBcImxpc3RcIiBmdW5jdGlvbmFsaXR5XG4gICAgdGhpcy5hZGRLZXlUb0xpc3Qoa2V5KTtcbiAgfVxuXG4gIC8vIEdldCBkYXRhIGZyb20gZW50aXR5IHdpdGggbmFtZSBrZXlcbiAgZ2V0KGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldEl0ZW0oa2V5KTtcbiAgICByZXR1cm4gZGF0YSA/IHRoaXMudG9KU09OKGRhdGEpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGVudGlyZSBlbnRpdHkgZnJvbSB0aGUgc3RvcmUgd2l0aCBuYW1lIGtleVxuICByZW1vdmUoa2V5KSB7XG4gICAgdGhpcy5zdG9yZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgdGhpcy5yZW1vdmVLZXlUb0xpc3Qoa2V5KTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgbGlzdCBvZiBrZXlzIHByZXNlbnQgaW4gdGhlIHN0b3JlXG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuS0VZX0xJU1RfTkFNRSk7XG4gIH1cblxuICAvLyBSZXR1cm4gYm9vbGVhbiBpZiBleGlzdCB0aGUga2V5IGFuZCB0aGUgZGF0YVxuICBleGlzdChrZXkpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXQoa2V5KTtcbiAgICByZXR1cm4gISFkYXRhO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdG9yYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBHSVIgPSB7XG4gIGluaXQoKSB7XG4gICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAkKFwic2VsZWN0LmRyb3Bkb3duXCIpLmRyb3Bkb3duKCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbiQoXCIjc3VibWl0XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcbiAgICB7XG4gICAgICBhcGlrZXk6IG51bGwsXG4gICAgICBwcm9qZWN0TmFtZTogbnVsbCxcbiAgICAgIGdpdGxhYlVybDogbnVsbFxuICAgIH0sXG4gICAgZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcbiAgICB9XG4gICk7XG59KTtcblxuR0lSLmluaXQoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==