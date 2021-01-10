const weather = document.querySelector(".js-date");


const API_KEY = "30d1b4cda0f5002de381146e2beeb1ee";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){ 
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

 function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
 }

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
  
function handleGeoError() {
    console.log("Can't access geo location!");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords =  localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        // getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();
