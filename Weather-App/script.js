const form = document.querySelector(".input")
const windSpeed = document.querySelector("#windspeed");
const descri = document.querySelector("#desc");
const temp = document.querySelector("#temp");

const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e94561885a1fa619a0f1e21c125f0984";

function input(e){
    e.preventDefault();
    const city = document.querySelector('#inputValue').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e94561885a1fa619a0f1e21c125f0984`)
    .then( res => res.json())
    .then( data => {
        descri.innerHTML = data.weather[0].description;
        windSpeed.innerHTML = `Wind Speed: ${data.wind.speed}`;
        temp.innerHTML = "Temperatur: "+ Math.floor((data.main.temp - 273.15));
    })
    .catch(()=>{
        descri.innerHTML = (`${city} is not a city.`);
        
    });
}
form.addEventListener('submit',input);