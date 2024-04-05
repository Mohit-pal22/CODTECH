{/* <i class='bx bx-cloud-light-rain bx-flashing' style='color:#5cf0fb' ></i>
<i class='bx bxs-sun bx-spin' style='color:#f8fb5c' ></i> */}


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "5e4aa49e47d83c8d22a8bc06ba95e03e";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    console.log(city)
    console.log(apiUrl)
    console.log(apiKey)

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "flex";

        document.querySelector(".city").innerHTML = "---";
        document.querySelector(".temp").innerHTML = "°C";
        document.querySelector(".humidity").innerHTML = "%";
        document.querySelector(".windSpeed").innerHTML = "km/h";
    }
    else
    {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src = "./images/clouds.png";
        }
        else if(data.weather[0] == "Clear")
        {
            weatherIcon.src = "./images/clear.png"
        }
        else if(data.weather[0] == "Rain")
        {
            weatherIcon.src = "./images/rain.png"
        }
        else if(data.weather[0] == "Drizzle")
        {
            weatherIcon.src = "./images/drizzle.png"
        }
        else if(data.weather[0] == "Mist")
        {
            weatherIcon.src = "./images/mist.png"
        }
    }
}

searchBtn.addEventListener("click", ()=>
{
    document.querySelector(".error").style.display = "none";
    console.log(searchBox.value);
    checkWeather(searchBox.value);
})