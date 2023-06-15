async function getNext3DaysWeather(location) {
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3cd48fd5a1fe4c29b92135531230806&q=${location}&days=3`,
    { mode: "cors" }
  );
  const data = await fetchData.json();

  if (checkError(data)) return false;
  else return data;
}

const locationErrorOutput = document.querySelector("input + output");

function checkError(data) {
  if (data.error) {
    return true;
  } else {
    return false;
  }
}

export { getNext3DaysWeather, checkError };
