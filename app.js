const apiKey = "e3b66080586cf1f120e5b04b820dbc9f";
const serachBtn = document.querySelector(".search button");
async function checkWeather() {
  const query = document.querySelector(".search input").value;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=metric";
  const response = await fetch(url);
  const data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  const icon = data.weather[0].icon;
  const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  const weatherIcon = document.getElementById("wicon");
  weatherIcon.classList.add("icon2");
  weatherIcon.setAttribute("src", imgUrl);
  weatherIcon.classList.remove("icon2");
}
serachBtn.addEventListener("click", function () {
  checkWeather();
});
