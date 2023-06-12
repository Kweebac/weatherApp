/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

async function getNextThreeDaysWeather(location) {
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3cd48fd5a1fe4c29b92135531230806&q=${location}`
  );
  return await fetchData.json();
}

(async function main() {
  console.log(await getNextThreeDaysWeather("london"));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLFNBQVM7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbkNyZWF0ZSB3ZWF0aGVyIGZvcmVjYXN0IHNpdGUsIHNlYXJjaCBmb3IgbG9jYXRpb24sIHRvZ2dsZSBiZXR3ZWVuIEMgYW5kIEZcclxuQ2hhbmdlIHRoZSBsb29rIG9mIHRoZSBwYWdlIGJhc2VkIG9uIGRhdGEgKGNoYW5nZSBjb2xvciBvZiBiYWNrZ3JvdW5kIG9yIGltYWdlcyB0aGF0IGRlc2NyaWJlIHdlYXRoZXIpXHJcblxyXG4xIFdyaXRlIHRoZSBmdW5jdGlvbnMgdGhhdCBoaXQgdGhlIEFQSS4gWW914oCZcmUgZ29pbmcgdG8gd2FudCBmdW5jdGlvbnMgdGhhdCBjYW4gdGFrZSBhIGxvY2F0aW9uIGFuZCByZXR1cm4gdGhlIHdlYXRoZXIgZGF0YSBmb3IgdGhhdCBsb2NhdGlvbi4gXHJcbiAgRm9yIG5vdywganVzdCBjb25zb2xlLmxvZygpIHRoZSBpbmZvcm1hdGlvbi5cclxuMiBXcml0ZSB0aGUgZnVuY3Rpb25zIHRoYXQgcHJvY2VzcyB0aGUgSlNPTiBkYXRhIHlvdeKAmXJlIGdldHRpbmcgZnJvbSB0aGUgQVBJIGFuZCByZXR1cm4gYW4gb2JqZWN0IHdpdGggb25seSB0aGUgZGF0YSB5b3UgcmVxdWlyZSBmb3IgeW91ciBhcHAuXHJcbjMgU2V0IHVwIGEgc2ltcGxlIGZvcm0gdGhhdCB3aWxsIGxldCB1c2VycyBpbnB1dCB0aGVpciBsb2NhdGlvbiBhbmQgd2lsbCBmZXRjaCB0aGUgd2VhdGhlciBpbmZvIChzdGlsbCBqdXN0IGNvbnNvbGUubG9nKCkgaXQpLlxyXG40IERpc3BsYXkgdGhlIGluZm9ybWF0aW9uIG9uIHlvdXIgd2VicGFnZSFcclxuNSBBZGQgYW55IHN0eWxpbmcgeW91IGxpa2UhXHJcbjYgT3B0aW9uYWw6IGFkZCBhIOKAmGxvYWRpbmfigJkgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgZnJvbSB0aGUgdGltZSB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgdW50aWwgdGhlIGluZm9ybWF0aW9uIGNvbWVzIGJhY2sgZnJvbSB0aGUgQVBJLlxyXG4gIFVzZSBEZXZUb29scyB0byB0ZXN0IGZvciBsb3ctZW5kIGRldmljZXMuXHJcbiovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXROZXh0VGhyZWVEYXlzV2VhdGhlcihsb2NhdGlvbikge1xyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTNjZDQ4ZmQ1YTFmZTRjMjliOTIxMzU1MzEyMzA4MDYmcT0ke2xvY2F0aW9ufWBcclxuICApO1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaERhdGEuanNvbigpO1xyXG59XHJcblxyXG4oYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcclxuICBjb25zb2xlLmxvZyhhd2FpdCBnZXROZXh0VGhyZWVEYXlzV2VhdGhlcihcImxvbmRvblwiKSk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==