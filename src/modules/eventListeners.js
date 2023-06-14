import { populateWeather } from "./DOM";

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
    if (celcius) {
      changeTempButton.textContent = "Display °C";
      populateWeather(location);
      celcius = false;
    } else {
      changeTempButton.textContent = "Display °F";
      populateWeather(location);
      celcius = true;
    }
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    location = locationInput.value;
    populateWeather(location);
  };
}

export { addEventListeners, celcius, location };
