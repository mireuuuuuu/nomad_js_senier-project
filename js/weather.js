function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "69ad28374b6668cc98c2d6be1ff71d4f"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:nth-child(2)");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;

        });
}
function onGeoError(){
    alert("can't find you. no weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);