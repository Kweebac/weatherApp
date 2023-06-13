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
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
/* harmony import */ var _fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchWeatherData */ "./src/fetchWeatherData.js");



// DAILY
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

async function populateDayWeather(day, index, data) {
  day.dayOfWeek.textContent = getDayName(data, index);
  if (_eventListeners__WEBPACK_IMPORTED_MODULE_0__.celcius) {
    day.avgTemp.textContent = `${data.forecast.forecastday[index].day.avgtemp_c} °C`;
    day.tempDifference.textContent = `${data.forecast.forecastday[index].day.mintemp_c} to ${data.forecast.forecastday[index].day.maxtemp_c} °C`;
  } else {
    day.avgTemp.textContent = `${data.forecast.forecastday[index].day.avgtemp_f} °F`;
    day.tempDifference.textContent = `${data.forecast.forecastday[index].day.mintemp_f} to ${data.forecast.forecastday[index].day.maxtemp_f} °F`;
  }
  day.weatherIcon.src = data.forecast.forecastday[index].day.condition.icon;
}

// HOURLY
const times = document.querySelectorAll(".hour .time");
const avgTemps = document.querySelectorAll(".hour .avgTemp");
const weatherIcons = document.querySelectorAll(".hour .weatherIcon");

async function populateHourWeather(hour, data) {
  times[hour].textContent = data.forecast.forecastday[0].hour[hour].time.split(" ")[1];
  if (_eventListeners__WEBPACK_IMPORTED_MODULE_0__.celcius) {
    avgTemps[hour].textContent = `${data.forecast.forecastday[0].hour[hour].temp_c} °C`;
  } else {
    avgTemps[hour].textContent = `${data.forecast.forecastday[0].hour[hour].temp_f} °F`;
  }
  weatherIcons[hour].src = data.forecast.forecastday[0].hour[hour].condition.icon;
}

// BOTH
async function populateWeather(location) {
  const data = await (0,_fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__.getNext3DaysWeather)(location);

  populateDayWeather(day0, 0, data);
  populateDayWeather(day1, 1, data);
  populateDayWeather(day2, 2, data);

  for (let i = 0; i < 24; i++) {
    populateHourWeather(i, data);
  }
}




/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners),
/* harmony export */   celcius: () => (/* binding */ celcius)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


const dailyButton = document.querySelector(".dailyButton");
const hourlyButton = document.querySelector(".hourlyButton");
const changeTempButton = document.querySelector(".changeTemp");

const dailyContainer = document.querySelector(".daily");
const hourlyContainer = document.querySelector(".hourly");

let celcius = true;

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

  changeTempButton.addEventListener("click", () => {
    if (celcius) {
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.populateWeather)("London");
      changeTempButton.textContent = "Display °F";
      celcius = false;
    } else {
      changeTempButton.textContent = "Display °C";
      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.populateWeather)("London");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQU87QUFDYixpQ0FBaUMsZ0RBQWdEO0FBQ2pGLHdDQUF3QyxnREFBZ0QsS0FBSyxnREFBZ0Q7QUFDN0ksSUFBSTtBQUNKLGlDQUFpQyxnREFBZ0Q7QUFDakYsd0NBQXdDLGdEQUFnRCxLQUFLLGdEQUFnRDtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBTztBQUNiLG9DQUFvQyxnREFBZ0Q7QUFDcEYsSUFBSTtBQUNKLG9DQUFvQyxnREFBZ0Q7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNFQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBZTtBQUNyQjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTSxxREFBZTtBQUNyQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDc0M7Ozs7Ozs7Ozs7Ozs7OztBQzVDdEM7QUFDQTtBQUNBLHlGQUF5RixTQUFTO0FBQ2xHLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUMrQjs7Ozs7OztVQ1IvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FEO0FBQ2I7QUFDeEM7QUFDQSxrRUFBaUI7QUFDakIscURBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZmV0Y2hXZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjZWxjaXVzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnNcIjtcclxuaW1wb3J0IHsgZ2V0TmV4dDNEYXlzV2VhdGhlciB9IGZyb20gXCIuL2ZldGNoV2VhdGhlckRhdGFcIjtcclxuXHJcbi8vIERBSUxZXHJcbmNvbnN0IGRheTAgPSB7XHJcbiAgZGF5T2ZXZWVrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTAgLmRheU9mV2Vla1wiKSxcclxuICBhdmdUZW1wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTAgLmF2Z1RlbXBcIiksXHJcbiAgdGVtcERpZmZlcmVuY2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MCAudGVtcERpZmZlcmVuY2VcIiksXHJcbiAgd2VhdGhlckljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MCAud2VhdGhlckljb25cIiksXHJcbn07XHJcbmNvbnN0IGRheTEgPSB7XHJcbiAgZGF5T2ZXZWVrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTEgLmRheU9mV2Vla1wiKSxcclxuICBhdmdUZW1wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTEgLmF2Z1RlbXBcIiksXHJcbiAgdGVtcERpZmZlcmVuY2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MSAudGVtcERpZmZlcmVuY2VcIiksXHJcbiAgd2VhdGhlckljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MSAud2VhdGhlckljb25cIiksXHJcbn07XHJcbmNvbnN0IGRheTIgPSB7XHJcbiAgZGF5T2ZXZWVrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTIgLmRheU9mV2Vla1wiKSxcclxuICBhdmdUZW1wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheTIgLmF2Z1RlbXBcIiksXHJcbiAgdGVtcERpZmZlcmVuY2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MiAudGVtcERpZmZlcmVuY2VcIiksXHJcbiAgd2VhdGhlckljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5MiAud2VhdGhlckljb25cIiksXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXREYXlOYW1lKGRhdGEsIGRheUluZGV4KSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5SW5kZXhdLmRhdGUpLmdldERheSgpO1xyXG5cclxuICByZXR1cm4gZGF0ZSA9PT0gMFxyXG4gICAgPyBcIlN1bmRheVwiXHJcbiAgICA6IGRhdGUgPT09IDFcclxuICAgID8gXCJNb25kYXlcIlxyXG4gICAgOiBkYXRlID09PSAyXHJcbiAgICA/IFwiVHVlc2RheVwiXHJcbiAgICA6IGRhdGUgPT09IDNcclxuICAgID8gXCJXZWRuZXNkYXlcIlxyXG4gICAgOiBkYXRlID09PSA0XHJcbiAgICA/IFwiVGh1cnNkYXlcIlxyXG4gICAgOiBkYXRlID09PSA1XHJcbiAgICA/IFwiRnJpZGF5XCJcclxuICAgIDogXCJTYXR1cmRheVwiO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZURheVdlYXRoZXIoZGF5LCBpbmRleCwgZGF0YSkge1xyXG4gIGRheS5kYXlPZldlZWsudGV4dENvbnRlbnQgPSBnZXREYXlOYW1lKGRhdGEsIGluZGV4KTtcclxuICBpZiAoY2VsY2l1cykge1xyXG4gICAgZGF5LmF2Z1RlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XS5kYXkuYXZndGVtcF9jfSDCsENgO1xyXG4gICAgZGF5LnRlbXBEaWZmZXJlbmNlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpbmRleF0uZGF5Lm1pbnRlbXBfY30gdG8gJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XS5kYXkubWF4dGVtcF9jfSDCsENgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYXkuYXZnVGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaW5kZXhdLmRheS5hdmd0ZW1wX2Z9IMKwRmA7XHJcbiAgICBkYXkudGVtcERpZmZlcmVuY2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XS5kYXkubWludGVtcF9mfSB0byAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaW5kZXhdLmRheS5tYXh0ZW1wX2Z9IMKwRmA7XHJcbiAgfVxyXG4gIGRheS53ZWF0aGVySWNvbi5zcmMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XS5kYXkuY29uZGl0aW9uLmljb247XHJcbn1cclxuXHJcbi8vIEhPVVJMWVxyXG5jb25zdCB0aW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91ciAudGltZVwiKTtcclxuY29uc3QgYXZnVGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXIgLmF2Z1RlbXBcIik7XHJcbmNvbnN0IHdlYXRoZXJJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91ciAud2VhdGhlckljb25cIik7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZUhvdXJXZWF0aGVyKGhvdXIsIGRhdGEpIHtcclxuICB0aW1lc1tob3VyXS50ZXh0Q29udGVudCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltob3VyXS50aW1lLnNwbGl0KFwiIFwiKVsxXTtcclxuICBpZiAoY2VsY2l1cykge1xyXG4gICAgYXZnVGVtcHNbaG91cl0udGV4dENvbnRlbnQgPSBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaG91cl0udGVtcF9jfSDCsENgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhdmdUZW1wc1tob3VyXS50ZXh0Q29udGVudCA9IGAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltob3VyXS50ZW1wX2Z9IMKwRmA7XHJcbiAgfVxyXG4gIHdlYXRoZXJJY29uc1tob3VyXS5zcmMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaG91cl0uY29uZGl0aW9uLmljb247XHJcbn1cclxuXHJcbi8vIEJPVEhcclxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXZWF0aGVyKGxvY2F0aW9uKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldE5leHQzRGF5c1dlYXRoZXIobG9jYXRpb24pO1xyXG5cclxuICBwb3B1bGF0ZURheVdlYXRoZXIoZGF5MCwgMCwgZGF0YSk7XHJcbiAgcG9wdWxhdGVEYXlXZWF0aGVyKGRheTEsIDEsIGRhdGEpO1xyXG4gIHBvcHVsYXRlRGF5V2VhdGhlcihkYXkyLCAyLCBkYXRhKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICBwb3B1bGF0ZUhvdXJXZWF0aGVyKGksIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgcG9wdWxhdGVXZWF0aGVyIH07XHJcbiIsImltcG9ydCB7IHBvcHVsYXRlV2VhdGhlciB9IGZyb20gXCIuL0RPTVwiO1xyXG5cclxuY29uc3QgZGFpbHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5QnV0dG9uXCIpO1xyXG5jb25zdCBob3VybHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseUJ1dHRvblwiKTtcclxuY29uc3QgY2hhbmdlVGVtcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlVGVtcFwiKTtcclxuXHJcbmNvbnN0IGRhaWx5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseVwiKTtcclxuY29uc3QgaG91cmx5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHlcIik7XHJcblxyXG5sZXQgY2VsY2l1cyA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICBkYWlseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZGFpbHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcclxuICAgIGhvdXJseUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBkYWlseUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICBob3VybHlDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICBkYWlseUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgIGhvdXJseUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICB9KTtcclxuICBob3VybHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGhvdXJseUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibGFja1wiO1xyXG4gICAgZGFpbHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcblxyXG4gICAgaG91cmx5Q29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIGRhaWx5Q29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgaG91cmx5Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgZGFpbHlDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgfSk7XHJcblxyXG4gIGNoYW5nZVRlbXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChjZWxjaXVzKSB7XHJcbiAgICAgIHBvcHVsYXRlV2VhdGhlcihcIkxvbmRvblwiKTtcclxuICAgICAgY2hhbmdlVGVtcEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsEZcIjtcclxuICAgICAgY2VsY2l1cyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hhbmdlVGVtcEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsENcIjtcclxuICAgICAgcG9wdWxhdGVXZWF0aGVyKFwiTG9uZG9uXCIpO1xyXG4gICAgICBjZWxjaXVzID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lcnMsIGNlbGNpdXMgfTtcclxuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0TmV4dDNEYXlzV2VhdGhlcihsb2NhdGlvbikge1xyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTNjZDQ4ZmQ1YTFmZTRjMjliOTIxMzU1MzEyMzA4MDYmcT0ke2xvY2F0aW9ufSZkYXlzPTNgLFxyXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgKTtcclxuICByZXR1cm4gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0TmV4dDNEYXlzV2VhdGhlciB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIFxyXG5DcmVhdGUgd2VhdGhlciBmb3JlY2FzdCBzaXRlLCBzZWFyY2ggZm9yIGxvY2F0aW9uLCB0b2dnbGUgYmV0d2VlbiBDIGFuZCBGXHJcbkNoYW5nZSB0aGUgbG9vayBvZiB0aGUgcGFnZSBiYXNlZCBvbiBkYXRhIChjaGFuZ2UgY29sb3Igb2YgYmFja2dyb3VuZCBvciBpbWFnZXMgdGhhdCBkZXNjcmliZSB3ZWF0aGVyKVxyXG5cclxuMSBXcml0ZSB0aGUgZnVuY3Rpb25zIHRoYXQgaGl0IHRoZSBBUEkuIFlvdeKAmXJlIGdvaW5nIHRvIHdhbnQgZnVuY3Rpb25zIHRoYXQgY2FuIHRha2UgYSBsb2NhdGlvbiBhbmQgcmV0dXJuIHRoZSB3ZWF0aGVyIGRhdGEgZm9yIHRoYXQgbG9jYXRpb24uIFxyXG4gIEZvciBub3csIGp1c3QgY29uc29sZS5sb2coKSB0aGUgaW5mb3JtYXRpb24uXHJcbjIgV3JpdGUgdGhlIGZ1bmN0aW9ucyB0aGF0IHByb2Nlc3MgdGhlIEpTT04gZGF0YSB5b3XigJlyZSBnZXR0aW5nIGZyb20gdGhlIEFQSSBhbmQgcmV0dXJuIGFuIG9iamVjdCB3aXRoIG9ubHkgdGhlIGRhdGEgeW91IHJlcXVpcmUgZm9yIHlvdXIgYXBwLlxyXG4zIFNldCB1cCBhIHNpbXBsZSBmb3JtIHRoYXQgd2lsbCBsZXQgdXNlcnMgaW5wdXQgdGhlaXIgbG9jYXRpb24gYW5kIHdpbGwgZmV0Y2ggdGhlIHdlYXRoZXIgaW5mbyAoc3RpbGwganVzdCBjb25zb2xlLmxvZygpIGl0KS5cclxuNCBEaXNwbGF5IHRoZSBpbmZvcm1hdGlvbiBvbiB5b3VyIHdlYnBhZ2UhXHJcbjUgQWRkIGFueSBzdHlsaW5nIHlvdSBsaWtlIVxyXG42IE9wdGlvbmFsOiBhZGQgYSDigJhsb2FkaW5n4oCZIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGZyb20gdGhlIHRpbWUgdGhlIGZvcm0gaXMgc3VibWl0dGVkIHVudGlsIHRoZSBpbmZvcm1hdGlvbiBjb21lcyBiYWNrIGZyb20gdGhlIEFQSS5cclxuICBVc2UgRGV2VG9vbHMgdG8gdGVzdCBmb3IgbG93LWVuZCBkZXZpY2VzLlxyXG5cclxuVE8tRE9cclxuQWRkIGhvdXJseSBzZWN0aW9uXHJcbkFkZCBhbnl0aGluZyBlbHNlIHJlbGF0ZWQgdG8gdGVtcGVyYXR1cmVzXHJcbkZpbmlzaCBDIHRvIEYgYnV0dG9uXHJcbiovXHJcblxyXG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XHJcbmltcG9ydCB7IHBvcHVsYXRlV2VhdGhlciB9IGZyb20gXCIuL0RPTVwiO1xyXG5cclxuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxucG9wdWxhdGVXZWF0aGVyKFwiTG9uZG9uXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=