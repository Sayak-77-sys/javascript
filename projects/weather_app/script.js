const apiKey = "f6efc7bedb4e54ae21d2880986a7c538";
 // <-- ////Replace with your OpenWeatherMap API key

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherResult.innerHTML = `<p style="color: #ff6b6b;">${error.message}</p>`;
  }
});

function displayWeather(data) {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const condition = weather[0].description;
  const humidity = main.humidity;

  weatherResult.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Condition: ${capitalize(condition)}</p>
    <p>Humidity: ${humidity}%</p>
  `;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
