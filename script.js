const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6b059c7c00msh205ad30ec9ad8a8p115a43jsn81f71633d308',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        cityName.innerHTML = city
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
search.addEventListener("click" , (e)=>{
    e.preventDefault()
    getWeather(city.value)
})





// const btmn = document.getElementById("search")
// const val = document.getElementById("city")
// const val11 = document.getElementById("cityName")
// function fun1(){
//     val11.cityName = val.value;
//     getWeather(val.value)
// }
// // btmn.addEventListener("click", fun1=>{e.preventDefault(),getWeather(val.value)})
// btmn.addEventListener("click", fun1)