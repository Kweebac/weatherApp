const dailyButton = document.querySelector(".dailyButton");
const hourlyButton = document.querySelector(".hourlyButton");
const changeTempButton = document.querySelector(".changeTemp");

function addEventListeners() {
  dailyButton.addEventListener("click", () => {
    dailyButton.style.border = "2px solid black";
    hourlyButton.style.border = "none";
  });
  hourlyButton.addEventListener("click", () => {
    hourlyButton.style.border = "2px solid black";
    dailyButton.style.border = "none";
  });

  let celcius = true;
  changeTempButton.addEventListener("click", () => {
    if (celcius) {
      changeTempButton.textContent = "Display °F";
      celcius = false;
    } else {
      changeTempButton.textContent = "Display °C";
      celcius = true;
    }
  });
}

export { addEventListeners };
