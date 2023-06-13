/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateWeather: () => (/* binding */ populateWeather)
/* harmony export */ });
/* harmony import */ var _fetchWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeatherData */ "./src/fetchWeatherData.js");


const day0 = {
  dayOfWeek: document.querySelector("#day0 .dayOfWeek"),
  avgTemp: document.querySelector("#day0 .avgTemp"),
  tempDifference: document.querySelector("#day0 .tempDifference"),
  weatherIcon: document.querySelector("#day0 .weatherIcon"),
};
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

async function populateDayWeather(day, index, location) {
  const data = await (0,_fetchWeatherData__WEBPACK_IMPORTED_MODULE_0__.getNext3DaysWeather)(location);

  day.dayOfWeek.textContent = getDayName(data, index);
  day.avgTemp.textContent = `${data.forecast.forecastday[index].day.avgtemp_c} °C`;
  day.tempDifference.textContent = `${data.forecast.forecastday[index].day.mintemp_c} to ${data.forecast.forecastday[index].day.maxtemp_c} °C`;
  day.weatherIcon.src = data.forecast.forecastday[index].day.condition.icon;
}

async function populateHourWeather(hour, location) {}

async function populateWeather(location) {
  populateDayWeather(day0, 0, location);
  populateDayWeather(day1, 1, location);
  populateDayWeather(day2, 2, location);
}




/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners)
/* harmony export */ });
const dailyButton = document.querySelector(".dailyButton");
const hourlyButton = document.querySelector(".hourlyButton");
const changeTempButton = document.querySelector(".changeTemp");

const dailyContainer = document.querySelector(".daily");
const hourlyContainer = document.querySelector(".hourly");

function addEventListeners() {
  dailyButton.addEventListener("click", () => {
    dailyButton.style.border = "2px solid black";
    hourlyButton.style.border = "none";

    dailyContainer.style.visibility = "visible";
    hourlyContainer.style.visibility = "hidden";
    dailyContainer.style.position = "relative";
    hourlyContainer.style.position = "absolute";
  });
  hourlyButton.addEventListener("click", () => {
    hourlyButton.style.border = "2px solid black";
    dailyButton.style.border = "none";

    hourlyContainer.style.visibility = "visible";
    dailyContainer.style.visibility = "hidden";
    hourlyContainer.style.position = "relative";
    dailyContainer.style.position = "absolute";
  });

  let celcius = false;
  changeTempButton.addEventListener("click", () => {
    if (celcius) {
      changeTempButton.textContent = "Display °F";
      celcius = false;
    } else {
      changeTempButton.textContent = "Display °C";
      celcius = true;
    }
  });
}




/***/ }),

/***/ "./src/fetchWeatherData.js":
/*!*********************************!*\
  !*** ./src/fetchWeatherData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNext3DaysWeather: () => (/* binding */ getNext3DaysWeather)
/* harmony export */ });
async function getNext3DaysWeather(location) {
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3cd48fd5a1fe4c29b92135531230806&q=${location}&days=3`,
    { mode: "cors" }
  );
  return await fetchData.json();
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
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
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

TO-DO
Add hourly section
Add anything else related to temperatures
Finish C to F button
*/




(0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.addEventListeners)();
(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.populateWeather)("London");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNFQUFtQjtBQUN4QztBQUNBO0FBQ0EsK0JBQStCLGdEQUFnRDtBQUMvRSxzQ0FBc0MsZ0RBQWdELEtBQUssZ0RBQWdEO0FBQzNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7Ozs7Ozs7Ozs7Ozs7OztBQ3hEM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDNkI7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDN0I7QUFDQTtBQUNBLHlGQUF5RixTQUFTO0FBQ2xHLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUMrQjs7Ozs7OztVQ1IvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FEO0FBQ2I7QUFDeEM7QUFDQSxrRUFBaUI7QUFDakIscURBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZmV0Y2hXZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXROZXh0M0RheXNXZWF0aGVyIH0gZnJvbSBcIi4vZmV0Y2hXZWF0aGVyRGF0YVwiO1xyXG5cclxuY29uc3QgZGF5MCA9IHtcclxuICBkYXlPZldlZWs6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MCAuZGF5T2ZXZWVrXCIpLFxyXG4gIGF2Z1RlbXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MCAuYXZnVGVtcFwiKSxcclxuICB0ZW1wRGlmZmVyZW5jZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXkwIC50ZW1wRGlmZmVyZW5jZVwiKSxcclxuICB3ZWF0aGVySWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXkwIC53ZWF0aGVySWNvblwiKSxcclxufTtcclxuY29uc3QgZGF5MSA9IHtcclxuICBkYXlPZldlZWs6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MSAuZGF5T2ZXZWVrXCIpLFxyXG4gIGF2Z1RlbXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MSAuYXZnVGVtcFwiKSxcclxuICB0ZW1wRGlmZmVyZW5jZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXkxIC50ZW1wRGlmZmVyZW5jZVwiKSxcclxuICB3ZWF0aGVySWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXkxIC53ZWF0aGVySWNvblwiKSxcclxufTtcclxuY29uc3QgZGF5MiA9IHtcclxuICBkYXlPZldlZWs6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MiAuZGF5T2ZXZWVrXCIpLFxyXG4gIGF2Z1RlbXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MiAuYXZnVGVtcFwiKSxcclxuICB0ZW1wRGlmZmVyZW5jZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXkyIC50ZW1wRGlmZmVyZW5jZVwiKSxcclxuICB3ZWF0aGVySWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXkyIC53ZWF0aGVySWNvblwiKSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldERheU5hbWUoZGF0YSwgZGF5SW5kZXgpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXlJbmRleF0uZGF0ZSkuZ2V0RGF5KCk7XHJcblxyXG4gIHJldHVybiBkYXRlID09PSAwXHJcbiAgICA/IFwiU3VuZGF5XCJcclxuICAgIDogZGF0ZSA9PT0gMVxyXG4gICAgPyBcIk1vbmRheVwiXHJcbiAgICA6IGRhdGUgPT09IDJcclxuICAgID8gXCJUdWVzZGF5XCJcclxuICAgIDogZGF0ZSA9PT0gM1xyXG4gICAgPyBcIldlZG5lc2RheVwiXHJcbiAgICA6IGRhdGUgPT09IDRcclxuICAgID8gXCJUaHVyc2RheVwiXHJcbiAgICA6IGRhdGUgPT09IDVcclxuICAgID8gXCJGcmlkYXlcIlxyXG4gICAgOiBcIlNhdHVyZGF5XCI7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlRGF5V2VhdGhlcihkYXksIGluZGV4LCBsb2NhdGlvbikge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXROZXh0M0RheXNXZWF0aGVyKGxvY2F0aW9uKTtcclxuXHJcbiAgZGF5LmRheU9mV2Vlay50ZXh0Q29udGVudCA9IGdldERheU5hbWUoZGF0YSwgaW5kZXgpO1xyXG4gIGRheS5hdmdUZW1wLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpbmRleF0uZGF5LmF2Z3RlbXBfY30gwrBDYDtcclxuICBkYXkudGVtcERpZmZlcmVuY2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XS5kYXkubWludGVtcF9jfSB0byAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaW5kZXhdLmRheS5tYXh0ZW1wX2N9IMKwQ2A7XHJcbiAgZGF5LndlYXRoZXJJY29uLnNyYyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaW5kZXhdLmRheS5jb25kaXRpb24uaWNvbjtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVIb3VyV2VhdGhlcihob3VyLCBsb2NhdGlvbikge31cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlV2VhdGhlcihsb2NhdGlvbikge1xyXG4gIHBvcHVsYXRlRGF5V2VhdGhlcihkYXkwLCAwLCBsb2NhdGlvbik7XHJcbiAgcG9wdWxhdGVEYXlXZWF0aGVyKGRheTEsIDEsIGxvY2F0aW9uKTtcclxuICBwb3B1bGF0ZURheVdlYXRoZXIoZGF5MiwgMiwgbG9jYXRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgeyBwb3B1bGF0ZVdlYXRoZXIgfTtcclxuIiwiY29uc3QgZGFpbHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5QnV0dG9uXCIpO1xyXG5jb25zdCBob3VybHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseUJ1dHRvblwiKTtcclxuY29uc3QgY2hhbmdlVGVtcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlVGVtcFwiKTtcclxuXHJcbmNvbnN0IGRhaWx5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseVwiKTtcclxuY29uc3QgaG91cmx5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHlcIik7XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICBkYWlseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZGFpbHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcclxuICAgIGhvdXJseUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBkYWlseUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICBob3VybHlDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICBkYWlseUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgIGhvdXJseUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICB9KTtcclxuICBob3VybHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGhvdXJseUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibGFja1wiO1xyXG4gICAgZGFpbHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcblxyXG4gICAgaG91cmx5Q29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIGRhaWx5Q29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgaG91cmx5Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgZGFpbHlDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgfSk7XHJcblxyXG4gIGxldCBjZWxjaXVzID0gZmFsc2U7XHJcbiAgY2hhbmdlVGVtcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGNlbGNpdXMpIHtcclxuICAgICAgY2hhbmdlVGVtcEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsEZcIjtcclxuICAgICAgY2VsY2l1cyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hhbmdlVGVtcEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsENcIjtcclxuICAgICAgY2VsY2l1cyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJzIH07XHJcbiIsImFzeW5jIGZ1bmN0aW9uIGdldE5leHQzRGF5c1dlYXRoZXIobG9jYXRpb24pIHtcclxuICBjb25zdCBmZXRjaERhdGEgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zY2Q0OGZkNWExZmU0YzI5YjkyMTM1NTMxMjMwODA2JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcclxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICk7XHJcbiAgcmV0dXJuIGF3YWl0IGZldGNoRGF0YS5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldE5leHQzRGF5c1dlYXRoZXIgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBcclxuQ3JlYXRlIHdlYXRoZXIgZm9yZWNhc3Qgc2l0ZSwgc2VhcmNoIGZvciBsb2NhdGlvbiwgdG9nZ2xlIGJldHdlZW4gQyBhbmQgRlxyXG5DaGFuZ2UgdGhlIGxvb2sgb2YgdGhlIHBhZ2UgYmFzZWQgb24gZGF0YSAoY2hhbmdlIGNvbG9yIG9mIGJhY2tncm91bmQgb3IgaW1hZ2VzIHRoYXQgZGVzY3JpYmUgd2VhdGhlcilcclxuXHJcbjEgV3JpdGUgdGhlIGZ1bmN0aW9ucyB0aGF0IGhpdCB0aGUgQVBJLiBZb3XigJlyZSBnb2luZyB0byB3YW50IGZ1bmN0aW9ucyB0aGF0IGNhbiB0YWtlIGEgbG9jYXRpb24gYW5kIHJldHVybiB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGF0IGxvY2F0aW9uLiBcclxuICBGb3Igbm93LCBqdXN0IGNvbnNvbGUubG9nKCkgdGhlIGluZm9ybWF0aW9uLlxyXG4yIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBwcm9jZXNzIHRoZSBKU09OIGRhdGEgeW914oCZcmUgZ2V0dGluZyBmcm9tIHRoZSBBUEkgYW5kIHJldHVybiBhbiBvYmplY3Qgd2l0aCBvbmx5IHRoZSBkYXRhIHlvdSByZXF1aXJlIGZvciB5b3VyIGFwcC5cclxuMyBTZXQgdXAgYSBzaW1wbGUgZm9ybSB0aGF0IHdpbGwgbGV0IHVzZXJzIGlucHV0IHRoZWlyIGxvY2F0aW9uIGFuZCB3aWxsIGZldGNoIHRoZSB3ZWF0aGVyIGluZm8gKHN0aWxsIGp1c3QgY29uc29sZS5sb2coKSBpdCkuXHJcbjQgRGlzcGxheSB0aGUgaW5mb3JtYXRpb24gb24geW91ciB3ZWJwYWdlIVxyXG41IEFkZCBhbnkgc3R5bGluZyB5b3UgbGlrZSFcclxuNiBPcHRpb25hbDogYWRkIGEg4oCYbG9hZGluZ+KAmSBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBmcm9tIHRoZSB0aW1lIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCB1bnRpbCB0aGUgaW5mb3JtYXRpb24gY29tZXMgYmFjayBmcm9tIHRoZSBBUEkuXHJcbiAgVXNlIERldlRvb2xzIHRvIHRlc3QgZm9yIGxvdy1lbmQgZGV2aWNlcy5cclxuXHJcblRPLURPXHJcbkFkZCBob3VybHkgc2VjdGlvblxyXG5BZGQgYW55dGhpbmcgZWxzZSByZWxhdGVkIHRvIHRlbXBlcmF0dXJlc1xyXG5GaW5pc2ggQyB0byBGIGJ1dHRvblxyXG4qL1xyXG5cclxuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVyc1wiO1xyXG5pbXBvcnQgeyBwb3B1bGF0ZVdlYXRoZXIgfSBmcm9tIFwiLi9ET01cIjtcclxuXHJcbmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVsYXRlV2VhdGhlcihcIkxvbmRvblwiKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9