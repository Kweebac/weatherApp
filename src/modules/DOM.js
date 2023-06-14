import { celcius } from "./eventListeners";
import { handleError, getNext3DaysWeather } from "./fetchWeatherData";

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
  if (celcius) {
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
  if (celcius) {
    avgTemps[hour].textContent = `${data.forecast.forecastday[0].hour[hour].temp_c} °C`;
  } else {
    avgTemps[hour].textContent = `${data.forecast.forecastday[0].hour[hour].temp_f} °F`;
  }
  weatherIcons[hour].src = data.forecast.forecastday[0].hour[hour].condition.icon;
}

// BOTH
let data;
async function populateWeather(location) {
  data = await getNext3DaysWeather(location);
  if (handleError(data)) return;

  populateDayWeather(day0, 0, data);
  populateDayWeather(day1, 1, data);
  populateDayWeather(day2, 2, data);

  for (let i = 0; i < 24; i++) {
    populateHourWeather(i, data);
  }
}

export { populateWeather, data };
