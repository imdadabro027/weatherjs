const apiKey = "f00c38e0279b7bc85480c3fe775d518c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML =
      data.wind.deg + "° " + data.wind.speed + " Km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src =
          "https://png.pngtree.com/png-vector/20190413/ourmid/pngtree-vector-cloud-icon-png-image_939423.jpg";
        break;
      case "Clear":
        weatherIcon.src =
          "https://png.pngtree.com/png-vector/20190413/ourmid/pngtree-vector-cloud-icon-png-image_939423.jpg";
        break;
      case "Sunny":
        weatherIcon.src =
          "https://w7.pngwing.com/pngs/824/859/png-transparent-weather-sun-sunny-temperature-weather-color-icon-thumbnail.png";
        break;
      case "Haze":
        weatherIcon.src =
          "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
        break;
      default:
        weatherIcon.src =
          "https://p7.hiclipart.com/preview/629/164/924/rain-computer-icons-symbol-weather-rainy-day.jpg";
        break;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
