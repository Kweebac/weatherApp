import { getNext3DaysWeather } from "./fetchWeatherData";

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
  const data = await getNext3DaysWeather(location);

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

export { populateWeather };
