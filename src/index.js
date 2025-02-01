// Add an event listener to the "Search" button
document.getElementById("searchBtn").addEventListener("click", function() {
  
  // Get the city name entered by the user
  let city = document.getElementById("cityInput").value;

  // Fetch the API key from config.js (ensuring it's not hardcoded for security)
  let apiKey = config.API_KEY;  

  // Construct the API URL using the city name and API key
  let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  // Fetch weather data from the API
  fetch(url)
  .then(response => response.json())  // Convert the response to JSON format
  .then(data => {
      // Update the city name on the webpage
      document.getElementById("cityName").textContent = data.location.name + ", " + data.location.country;

      // Display the current temperature in Celsius
      document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c}°C`;

      // Display the weather condition description (e.g., "Cloudy", "Sunny")
      document.getElementById("description").textContent = data.current.condition.text;

      // Update the weather icon based on the API response
      document.getElementById("weatherIcon").src = data.current.condition.icon;
  })
  .catch(error => alert("City not found!"));  // Handle errors (e.g., invalid city name)
});



