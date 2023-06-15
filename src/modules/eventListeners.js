import {
  populateWeather,
  populateDayWeather,
  populateHourWeather,
  data,
  day0,
  day1,
  day2,
} from "./DOM";
import { checkError } from "./fetchWeatherData";

const dailyButton = document.querySelector(".dailyButton");
const hourlyButton = document.querySelector(".hourlyButton");
const changeTempButton = document.querySelector(".changeTemp");

const dailyContainer = document.querySelector(".daily");
const hourlyContainer = document.querySelector(".hourly");

const form = document.querySelector("form");
const locationInput = document.querySelector("input");

let celcius = true;
let location;

function addEventListeners() {
  dailyButton.onclick = () => {
    dailyButton.style.border = "2px solid black";
    hourlyButton.style.border = "none";

    dailyContainer.style.visibility = "visible";
    hourlyContainer.style.visibility = "hidden";
    dailyContainer.style.position = "relative";
    hourlyContainer.style.position = "absolute";
  };
  hourlyButton.onclick = () => {
    hourlyButton.style.border = "2px solid black";
    dailyButton.style.border = "none";

    hourlyContainer.style.visibility = "visible";
    dailyContainer.style.visibility = "hidden";
    hourlyContainer.style.position = "relative";
    dailyContainer.style.position = "absolute";
  };

  changeTempButton.onclick = () => {
    if (celcius) {
      celcius = false;
      changeTempButton.textContent = "Display °C";
      populateDayWeather(day0, 0, data);
      populateDayWeather(day1, 1, data);
      populateDayWeather(day2, 2, data);

      for (let i = 0; i < 24; i++) {
        populateHourWeather(i, data);
      }
    } else {
      celcius = true;
      changeTempButton.textContent = "Display °F";
      populateDayWeather(day0, 0, data);
      populateDayWeather(day1, 1, data);
      populateDayWeather(day2, 2, data);

      for (let i = 0; i < 24; i++) {
        populateHourWeather(i, data);
      }
    }
  };

  const everything = document.querySelectorAll("body > *");
  form.onsubmit = async (e) => {
    e.preventDefault();

    location = locationInput.value;
    await populateWeather(location);
    if (!checkError(data)) {
      everything.forEach((item) => (item.style.visibility = "visible"));
    }
  };
}

export { addEventListeners, celcius, location };
