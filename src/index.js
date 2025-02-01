document.getElementById("searchBtn").addEventListener("click", function() {
  let city = document.getElementById("cityInput").value;
  let apiKey = config.API_KEY;  // Fetching API key from config.js
  let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
      // Update current weather details
      document.getElementById("cityName").textContent = data.location.name + ", " + data.location.country;
      document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c}°C`;
      document.getElementById("description").textContent = data.current.condition.text;
      document.getElementById("weatherIcon").src = data.current.condition.icon;

      // Clear previous forecast data
      let forecastContainer = document.getElementById("forecast");
      forecastContainer.innerHTML = ""; 

      // Loop through the forecast data for the next 3 days
      data.forecast.forecastday.forEach(day => {
          let forecastItem = document.createElement("div");
          forecastItem.classList.add("forecast-item");

          forecastItem.innerHTML = `
              <p><strong>${day.date}</strong></p>
              <img src="${day.day.condition.icon}" alt="Weather Icon">
              <p>Max: ${day.day.maxtemp_c}°C</p>
              <p>Min: ${day.day.mintemp_c}°C</p>
              <p>${day.day.condition.text}</p>
          `;

          forecastContainer.appendChild(forecastItem);
      });
  })
  .catch(error => alert("City not found!"));
});
