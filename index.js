let now = new Date();
let h2 = document.querySelector("#date");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
h2.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#search-city").innerHTML = response.data.name;
  document.querySelector("#temprature").innerHTML = response.data.main.temp;
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#Wind").innerHTML = response.data.wind.speed;
}
function search(event) {
  event.preventDefault();
  let apiKey = "b6d73f272b32c7eb8715d70996cfa1dc";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
