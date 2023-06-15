import { celcius } from "./eventListeners";
import { getNext3DaysWeather, checkError } from "./fetchWeatherData";

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

function getDayName(dataValue, dayIndex) {
  const date = new Date(dataValue.forecast.forecastday[dayIndex].date).getDay();

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

function populateDayWeather(day, index, dataValue) {
  day.dayOfWeek.textContent = getDayName(dataValue, index);
  if (celcius) {
    day.avgTemp.textContent = `${dataValue.forecast.forecastday[index].day.avgtemp_c} °C`;
    day.tempDifference.textContent = `${dataValue.forecast.forecastday[index].day.mintemp_c} to ${dataValue.forecast.forecastday[index].day.maxtemp_c} °C`;
  } else {
    day.avgTemp.textContent = `${dataValue.forecast.forecastday[index].day.avgtemp_f} °F`;
    day.tempDifference.textContent = `${dataValue.forecast.forecastday[index].day.mintemp_f} to ${dataValue.forecast.forecastday[index].day.maxtemp_f} °F`;
  }
  day.weatherIcon.src = dataValue.forecast.forecastday[index].day.condition.icon;
}

// HOURLY
const times = document.querySelectorAll(".hour .time");
const avgTemps = document.querySelectorAll(".hour .avgTemp");
const weatherIcons = document.querySelectorAll(".hour .weatherIcon");

function populateHourWeather(hour, dataValue) {
  times[hour].textContent = dataValue.forecast.forecastday[0].hour[hour].time.split(" ")[1];
  if (celcius) {
    avgTemps[hour].textContent = `${dataValue.forecast.forecastday[0].hour[hour].temp_c} °C`;
  } else {
    avgTemps[hour].textContent = `${dataValue.forecast.forecastday[0].hour[hour].temp_f} °F`;
  }
  weatherIcons[hour].src = dataValue.forecast.forecastday[0].hour[hour].condition.icon;
}

// LEFT & RIGHT INFO
const leftWeatherStatus = document.querySelector(".left .weatherStatus");
const leftLocation = document.querySelector(".left .location");
const leftAvgTemp = document.querySelector(".left .avgTemp");
const leftWeatherIcon = document.querySelector(".left .weatherIcon");

const rightFeelsLike = document.querySelector(".right .feelsLike > div:last-child");
const rightHumidity = document.querySelector(".right .humidity > div:last-child");
const rightRainChance = document.querySelector(".right .rainChance > div:last-child");
const rightWindSpeed = document.querySelector(".right .windSpeed > div:last-child");

function populateSides(dataValue) {
  // LEFT SIDE
  leftWeatherStatus.textContent = dataValue.current.condition.text;
  leftLocation.textContent = dataValue.location.name;
  if (celcius) {
    leftAvgTemp.textContent = `${dataValue.current.temp_c} °C`;
  } else {
    leftAvgTemp.textContent = `${dataValue.current.temp_f} °F`;
  }
  leftWeatherIcon.src = dataValue.forecast.forecastday[0].day.condition.icon;

  // RIGHT SIDE
  if (celcius) {
    rightFeelsLike.textContent = `${dataValue.current.feelslike_c} °C`;
  } else {
    rightFeelsLike.textContent = `${dataValue.current.feelslike_f} °F`;
  }
  rightHumidity.textContent = `${dataValue.current.humidity} %`;
  rightRainChance.textContent = `${
    dataValue.forecast.forecastday[0].hour[new Date(dataValue.location.localtime).getHours()]
      .chance_of_rain
  } %`;
  rightWindSpeed.textContent = `${dataValue.current.wind_kph} km/h`;
}

// DAILY & HOURLY
let data;
const locationErrorOutput = document.querySelector("input + output");

async function populateWeather(location) {
  if (!checkError(await getNext3DaysWeather(location))) {
    locationErrorOutput.textContent = "";
    locationErrorOutput.style.backgroundColor = "";
    data = await getNext3DaysWeather(location);
  } else {
    locationErrorOutput.textContent = "Invalid location";
    locationErrorOutput.style.backgroundColor = "black";
    return;
  }

  populateDayWeather(day0, 0, data);
  populateDayWeather(day1, 1, data);
  populateDayWeather(day2, 2, data);

  for (let i = 0; i < 24; i++) {
    populateHourWeather(i, data);
  }

  populateSides(data);
}

export { populateWeather, populateDayWeather, populateHourWeather, data, day0, day1, day2 };
