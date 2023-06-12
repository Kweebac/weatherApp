/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateDailyWeather: () => (/* binding */ populateDailyWeather)
/* harmony export */ });
const day1 = {
  dayOfWeek: document.querySelector("#day1 .dayOfWeek"),
  avgTemp: document.querySelector("#day1 .avgTemp"),
  tempDifference: document.querySelector("#day1 .tempDifference"),
  weatherIcon: document.querySelector("#day1 .weatherIcon"),
};
const day2 = {
  dayOfWeek: document.querySelector("#day2 .dayOfWeek"),
  avgTemp: document.querySelector("#day2 .avgTemp"),
  tempDifference: document.querySelector("#day2 .tempDifference"),
  weatherIcon: document.querySelector("#day2 .weatherIcon"),
};
const day3 = {
  dayOfWeek: document.querySelector("#day3 .dayOfWeek"),
  avgTemp: document.querySelector("#day3 .avgTemp"),
  tempDifference: document.querySelector("#day3 .tempDifference"),
  weatherIcon: document.querySelector("#day3 .weatherIcon"),
};

function getDayName(data, dayIndex) {
  const date = new Date(data.forecast.forecastday[dayIndex].date).getDay();

  return date === 0
    ? "Sunday"
    : date === 1
    ? "Monday"
    : date === 2
    ? "Tuesday"
    : date === 3
    ? "Wednesday"
    : date === 4
    ? "Thursday"
    : date === 5
    ? "Friday"
    : "Saturday";
}

async function getNext3DaysWeather(location) {
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3cd48fd5a1fe4c29b92135531230806&q=${location}&days=3`,
    { mode: "cors" }
  );
  return await fetchData.json();
}

async function populateDailyWeather(location) {
  const data = await getNext3DaysWeather(location);

  day1.dayOfWeek.textContent = getDayName(data, 0);
  day2.dayOfWeek.textContent = getDayName(data, 1);
  day3.dayOfWeek.textContent = getDayName(data, 2);

  day1.avgTemp.textContent = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
  day2.avgTemp.textContent = `${data.forecast.forecastday[1].day.avgtemp_c} °C`;
  day3.avgTemp.textContent = `${data.forecast.forecastday[2].day.avgtemp_c} °C`;

  day1.tempDifference.textContent = `${data.forecast.forecastday[0].day.mintemp_c} to ${data.forecast.forecastday[0].day.maxtemp_c} °C`;
  day2.tempDifference.textContent = `${data.forecast.forecastday[1].day.mintemp_c} to ${data.forecast.forecastday[1].day.maxtemp_c} °C`;
  day3.tempDifference.textContent = `${data.forecast.forecastday[2].day.mintemp_c} to ${data.forecast.forecastday[2].day.maxtemp_c} °C`;

  day1.weatherIcon.src = data.forecast.forecastday[0].day.condition.icon;
  day2.weatherIcon.src = data.forecast.forecastday[1].day.condition.icon;
  day3.weatherIcon.src = data.forecast.forecastday[2].day.condition.icon;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* 
Create weather forecast site, search for location, toggle between C and F
Change the look of the page based on data (change color of background or images that describe weather)

1 Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. 
  For now, just console.log() the information.
2 Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
3 Set up a simple form that will let users input their location and will fetch the weather info (still just console.log() it).
4 Display the information on your webpage!
5 Add any styling you like!
6 Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.
  Use DevTools to test for low-end devices.
*/



(0,_weather__WEBPACK_IMPORTED_MODULE_0__.populateDailyWeather)("london");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixTQUFTO0FBQ2xHLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDRDQUE0QztBQUM1RSxnQ0FBZ0MsNENBQTRDO0FBQzVFLGdDQUFnQyw0Q0FBNEM7QUFDNUU7QUFDQSx1Q0FBdUMsNENBQTRDLEtBQUssNENBQTRDO0FBQ3BJLHVDQUF1Qyw0Q0FBNEMsS0FBSyw0Q0FBNEM7QUFDcEksdUNBQXVDLDRDQUE0QyxLQUFLLDRDQUE0QztBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7Ozs7Ozs7VUNqRWhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lEO0FBQ2pEO0FBQ0EsOERBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRheTEgPSB7XHJcbiAgZGF5T2ZXZWVrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTEgLmRheU9mV2Vla1wiKSxcclxuICBhdmdUZW1wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTEgLmF2Z1RlbXBcIiksXHJcbiAgdGVtcERpZmZlcmVuY2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MSAudGVtcERpZmZlcmVuY2VcIiksXHJcbiAgd2VhdGhlckljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MSAud2VhdGhlckljb25cIiksXHJcbn07XHJcbmNvbnN0IGRheTIgPSB7XHJcbiAgZGF5T2ZXZWVrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTIgLmRheU9mV2Vla1wiKSxcclxuICBhdmdUZW1wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTIgLmF2Z1RlbXBcIiksXHJcbiAgdGVtcERpZmZlcmVuY2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MiAudGVtcERpZmZlcmVuY2VcIiksXHJcbiAgd2VhdGhlckljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MiAud2VhdGhlckljb25cIiksXHJcbn07XHJcbmNvbnN0IGRheTMgPSB7XHJcbiAgZGF5T2ZXZWVrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTMgLmRheU9mV2Vla1wiKSxcclxuICBhdmdUZW1wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTMgLmF2Z1RlbXBcIiksXHJcbiAgdGVtcERpZmZlcmVuY2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MyAudGVtcERpZmZlcmVuY2VcIiksXHJcbiAgd2VhdGhlckljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MyAud2VhdGhlckljb25cIiksXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXREYXlOYW1lKGRhdGEsIGRheUluZGV4KSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5SW5kZXhdLmRhdGUpLmdldERheSgpO1xyXG5cclxuICByZXR1cm4gZGF0ZSA9PT0gMFxyXG4gICAgPyBcIlN1bmRheVwiXHJcbiAgICA6IGRhdGUgPT09IDFcclxuICAgID8gXCJNb25kYXlcIlxyXG4gICAgOiBkYXRlID09PSAyXHJcbiAgICA/IFwiVHVlc2RheVwiXHJcbiAgICA6IGRhdGUgPT09IDNcclxuICAgID8gXCJXZWRuZXNkYXlcIlxyXG4gICAgOiBkYXRlID09PSA0XHJcbiAgICA/IFwiVGh1cnNkYXlcIlxyXG4gICAgOiBkYXRlID09PSA1XHJcbiAgICA/IFwiRnJpZGF5XCJcclxuICAgIDogXCJTYXR1cmRheVwiO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXROZXh0M0RheXNXZWF0aGVyKGxvY2F0aW9uKSB7XHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9M2NkNDhmZDVhMWZlNGMyOWI5MjEzNTUzMTIzMDgwNiZxPSR7bG9jYXRpb259JmRheXM9M2AsXHJcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICApO1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaERhdGEuanNvbigpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZURhaWx5V2VhdGhlcihsb2NhdGlvbikge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXROZXh0M0RheXNXZWF0aGVyKGxvY2F0aW9uKTtcclxuXHJcbiAgZGF5MS5kYXlPZldlZWsudGV4dENvbnRlbnQgPSBnZXREYXlOYW1lKGRhdGEsIDApO1xyXG4gIGRheTIuZGF5T2ZXZWVrLnRleHRDb250ZW50ID0gZ2V0RGF5TmFtZShkYXRhLCAxKTtcclxuICBkYXkzLmRheU9mV2Vlay50ZXh0Q29udGVudCA9IGdldERheU5hbWUoZGF0YSwgMik7XHJcblxyXG4gIGRheTEuYXZnVGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmF2Z3RlbXBfY30gwrBDYDtcclxuICBkYXkyLmF2Z1RlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5hdmd0ZW1wX2N9IMKwQ2A7XHJcbiAgZGF5My5hdmdUZW1wLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9jfSDCsENgO1xyXG5cclxuICBkYXkxLnRlbXBEaWZmZXJlbmNlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jfSB0byAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfY30gwrBDYDtcclxuICBkYXkyLnRlbXBEaWZmZXJlbmNlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jfSB0byAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfY30gwrBDYDtcclxuICBkYXkzLnRlbXBEaWZmZXJlbmNlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jfSB0byAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfY30gwrBDYDtcclxuXHJcbiAgZGF5MS53ZWF0aGVySWNvbi5zcmMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbjtcclxuICBkYXkyLndlYXRoZXJJY29uLnNyYyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uO1xyXG4gIGRheTMud2VhdGhlckljb24uc3JjID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb247XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBvcHVsYXRlRGFpbHlXZWF0aGVyIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogXHJcbkNyZWF0ZSB3ZWF0aGVyIGZvcmVjYXN0IHNpdGUsIHNlYXJjaCBmb3IgbG9jYXRpb24sIHRvZ2dsZSBiZXR3ZWVuIEMgYW5kIEZcclxuQ2hhbmdlIHRoZSBsb29rIG9mIHRoZSBwYWdlIGJhc2VkIG9uIGRhdGEgKGNoYW5nZSBjb2xvciBvZiBiYWNrZ3JvdW5kIG9yIGltYWdlcyB0aGF0IGRlc2NyaWJlIHdlYXRoZXIpXHJcblxyXG4xIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBoaXQgdGhlIEFQSS4gWW914oCZcmUgZ29pbmcgdG8gd2FudCBmdW5jdGlvbnMgdGhhdCBjYW4gdGFrZSBhIGxvY2F0aW9uIGFuZCByZXR1cm4gdGhlIHdlYXRoZXIgZGF0YSBmb3IgdGhhdCBsb2NhdGlvbi4gXHJcbiAgRm9yIG5vdywganVzdCBjb25zb2xlLmxvZygpIHRoZSBpbmZvcm1hdGlvbi5cclxuMiBXcml0ZSB0aGUgZnVuY3Rpb25zIHRoYXQgcHJvY2VzcyB0aGUgSlNPTiBkYXRhIHlvdeKAmXJlIGdldHRpbmcgZnJvbSB0aGUgQVBJIGFuZCByZXR1cm4gYW4gb2JqZWN0IHdpdGggb25seSB0aGUgZGF0YSB5b3UgcmVxdWlyZSBmb3IgeW91ciBhcHAuXHJcbjMgU2V0IHVwIGEgc2ltcGxlIGZvcm0gdGhhdCB3aWxsIGxldCB1c2VycyBpbnB1dCB0aGVpciBsb2NhdGlvbiBhbmQgd2lsbCBmZXRjaCB0aGUgd2VhdGhlciBpbmZvIChzdGlsbCBqdXN0IGNvbnNvbGUubG9nKCkgaXQpLlxyXG40IERpc3BsYXkgdGhlIGluZm9ybWF0aW9uIG9uIHlvdXIgd2VicGFnZSFcclxuNSBBZGQgYW55IHN0eWxpbmcgeW91IGxpa2UhXHJcbjYgT3B0aW9uYWw6IGFkZCBhIOKAmGxvYWRpbmfigJkgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgZnJvbSB0aGUgdGltZSB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgdW50aWwgdGhlIGluZm9ybWF0aW9uIGNvbWVzIGJhY2sgZnJvbSB0aGUgQVBJLlxyXG4gIFVzZSBEZXZUb29scyB0byB0ZXN0IGZvciBsb3ctZW5kIGRldmljZXMuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBwb3B1bGF0ZURhaWx5V2VhdGhlciB9IGZyb20gXCIuL3dlYXRoZXJcIjtcclxuXHJcbnBvcHVsYXRlRGFpbHlXZWF0aGVyKFwibG9uZG9uXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=