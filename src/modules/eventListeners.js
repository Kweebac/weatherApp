import { populateWeather, populateDayWeather, populateHourWeather, data } from "./DOM";
import { handleError } from "./fetchWeatherData";

const dailyButton = document.querySelector(".dailyButton");
const hourlyButton = document.querySelector(".hourlyButton");
const changeTempButton = document.querySelector(".changeTemp");

const dailyContainer = document.querySelector(".daily");
const hourlyContainer = document.querySelector(".hourly");

const form = document.querySelector("form");
const locationInput = document.querySelector("input");

let celcius = true;
let location = locationInput.value;

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
    if (!handleError(data)) {
      if (celcius) {
        changeTempButton.textContent = "Display °C";
        populateDayWeather(data);
        populateHourWeather(data);
        celcius = false;
      } else {
        changeTempButton.textContent = "Display °F";
        populateDayWeather(data);
        populateHourWeather(data);
        celcius = true;
      }
    }
  };

  form.onsubmit = async (e) => {
    e.preventDefault();

    location = locationInput.value;
    await populateWeather(location);
  };
}

export { addEventListeners, celcius, location };