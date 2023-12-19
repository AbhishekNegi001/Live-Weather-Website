const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
method: 'GET',
headers: {
	'X-RapidAPI-Key': 'api-key',
	'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

async function getWeather(city){
	try {
		var cityName = document.getElementById("cityName")
		cityName.innerHTML = city
		const response = await fetch(url+city, options);
		const jsonObj = await response.json();
		console.log(jsonObj);

		cloud_pct.innerHTML = jsonObj.cloud_pct
		temp.innerHTML = jsonObj.temp
		temp2.innerHTML = jsonObj.temp
		feels_like.innerHTML = jsonObj.feels_like
		humidity.innerHTML = jsonObj.humidity
		humidity2.innerHTML = jsonObj.humidity
		min_temp.innerHTML = jsonObj.min_temp
		max_temp.innerHTML = jsonObj.max_temp
		wind_speed.innerHTML = jsonObj.wind_speed
		wind_speed2.innerHTML = jsonObj.wind_speed
		wind_degrees.innerHTML = jsonObj.wind_degrees
		sunrise.innerHTML = jsonObj.sunrise
		sunset.innerHTML = jsonObj.sunset
	} catch (error) {
		console.error(error);
	}
}
async function getWeatherCity1(city){
	try {
		var cityName = document.getElementById("cityName")
		cityName.innerHTML = city
		const response = await fetch(url+city, options);
		const jsonObj = await response.json();
		console.log(jsonObj);

		cloud_pct_1.innerHTML = jsonObj.cloud_pct
		temp_1.innerHTML = jsonObj.temp
		feels_like_1.innerHTML = jsonObj.feels_like
		humidity_1.innerHTML = jsonObj.humidity
		min_temp_1.innerHTML = jsonObj.min_temp
		max_temp_1.innerHTML = jsonObj.max_temp
		wind_speed_1.innerHTML = jsonObj.wind_speed
		wind_degrees_1.innerHTML = jsonObj.wind_degrees
		sunrise_1.innerHTML = jsonObj.sunrise
		sunset_1.innerHTML = jsonObj.sunset
	} catch (error) {
		console.error(error);
	}
}
async function getWeatherCity2(city){
	try {
		var cityName = document.getElementById("cityName")
		cityName.innerHTML = city
		const response = await fetch(url+city, options);
		const jsonObj = await response.json();
		console.log(jsonObj);

		cloud_pct_2.innerHTML = jsonObj.cloud_pct
		temp_2.innerHTML = jsonObj.temp
		feels_like_2.innerHTML = jsonObj.feels_like
		humidity_2.innerHTML = jsonObj.humidity
		min_temp_2.innerHTML = jsonObj.min_temp
		max_temp_2.innerHTML = jsonObj.max_temp
		wind_speed_2.innerHTML = jsonObj.wind_speed
		wind_degrees_2.innerHTML = jsonObj.wind_degrees
		sunrise_2.innerHTML = jsonObj.sunrise
		sunset_2.innerHTML = jsonObj.sunset
	} catch (error) {
		console.error(error);
	}
}
async function getWeatherCity3(city){
	try {
		var cityName = document.getElementById("cityName")
		cityName.innerHTML = city
		const response = await fetch(url+city, options);
		const jsonObj = await response.json();
		console.log(jsonObj);

		cloud_pct_3.innerHTML = jsonObj.cloud_pct
		temp_3.innerHTML = jsonObj.temp
		feels_like_3.innerHTML = jsonObj.feels_like
		humidity_3.innerHTML = jsonObj.humidity
		min_temp_3.innerHTML = jsonObj.min_temp
		max_temp_3.innerHTML = jsonObj.max_temp
		wind_speed_3.innerHTML = jsonObj.wind_speed
		wind_degrees_3.innerHTML = jsonObj.wind_degrees
		sunrise_3.innerHTML = jsonObj.sunrise
		sunset_3.innerHTML = jsonObj.sunset
	} catch (error) {
		console.error(error);
	}
}
var submit = document.getElementById("submit")
var city = document.getElementById("city")

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Dehradun")
getWeatherCity1("Delhi")
getWeatherCity2("Ayodhya")
getWeatherCity3("Bengaluru")