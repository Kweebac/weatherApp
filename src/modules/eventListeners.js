import { populateWeather } from "./DOM";

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
      changeTempButton.textContent = "Display °C";
      populateWeather("Illinois");
      celcius = false;
    } else {
      changeTempButton.textContent = "Display °F";
      populateWeather("Illinois");
      celcius = true;
    }
  });
}

export { addEventListeners, celcius };
