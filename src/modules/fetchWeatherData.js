async function getNext3DaysWeather(location) {
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3cd48fd5a1fe4c29b92135531230806&q=${location}&days=3`,
    { mode: "cors" }
  );
  const dataJSON = await fetchData.json();

  if (handleError(dataJSON)) {
    return false;
  } else {
    return dataJSON;
  }
}

const locationErrorOutput = document.querySelector("input + output");

function handleError(data) {
  if (data.error) {
    locationErrorOutput.textContent = "Invalid location";
    locationErrorOutput.style.backgroundColor = "black";
    return true;
  } else {
    locationErrorOutput.textContent = "";
    locationErrorOutput.style.backgroundColor = "";
    return false;
  }
}

export { getNext3DaysWeather, handleError };
