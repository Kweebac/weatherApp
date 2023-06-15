async function getNext3DaysWeather(location) {
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3cd48fd5a1fe4c29b92135531230806&q=${location}&days=3`,
    { mode: "cors" }
  );
  return await fetchData.json();
}

function checkError(data) {
  if (data.error) {
    return true;
  } else {
    return false;
  }
}

export { getNext3DaysWeather, checkError };
