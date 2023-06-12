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

export { populateDailyWeather };
