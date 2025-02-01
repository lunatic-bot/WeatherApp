document.getElementById("searchBtn").addEventListener("click", function() {
  let city = document.getElementById("cityInput").value;
  let apiKey = config.API_KEY;  // Fetching API key from config.js
  let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
      document.getElementById("cityName").textContent = data.location.name + ", " + data.location.country;
      document.getElementById("temperature").textContent = `Temperature: ${data.current.temp_c}°C`;
      document.getElementById("description").textContent = data.current.condition.text;
      document.getElementById("weatherIcon").src = data.current.condition.icon;
  })
  .catch(error => alert("City not found!"));
});

// document.getElementById('searchBtn').addEventListener("click", function() {
//   let city = document.getElementById('cityInput').value;
//   let apiKey = config.API_KEY;
//   let url = `http://api.weatherapi.com/v1//current.json?key=${apiKey}&q=${city}&aqi=no`;


//   fetch(url)
//   .then(reponse => response.json())
//   .then(data => {
//     document.getElementById('cityName').textContent = data.location.name + ", " + data.location.country;
//     document.getElementById('temprature').textContent = `Temprature: ${data.current.temp_c} °C`;
//     document.getElementById('description').textContent = data.current.condition.text;
//     document.getElementById('weatherIcon').src = data.current.condition.icon;
//   })
//   .catch(error => alert("City not found!"));
  
// });
