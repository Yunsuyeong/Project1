const API_KEY="edc694007b1d55b7436f3312aa6ed529";

function OnGeoOk(position){
    const lat=position.coords.latitude;             // 현재 위치의 위도값
    const long=position.coords.longitude;           // 현재 위치의 경도값
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data)=>{
            const Weather=document.querySelector(".weather span:first-child");
            const City=document.querySelector(".weather span:last-child");
            City.innerText=data.name;
            Weather.innerText=`${data.weather[0].main} \n ${data.main.temp}`;
        });
}

function OnGeoError(){
    alert("ERROR!");
}

navigator.geolocation.getCurrentPosition(OnGeoOk, OnGeoError);