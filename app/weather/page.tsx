import Link from 'next/link'
import Header from '@/app/header'
import Image from 'next/image'
import { fetchWeatherApi } from 'openmeteo';

const params = {
    "latitude": 51.7706,
    "longitude": 19.4739,
    "hourly": ["temperature_2m", "relative_humidity_2m", "wind_speed_10m", "wind_direction_10m"],
    "forecast_days": 1
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);
// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const latitude = response.latitude();
const longitude = response.longitude();
const hourly = response.hourly()!;

const weatherData = {

    hourly: {
        time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
            (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2m: hourly.variables(0)!.valuesArray()!,
        relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
        windSpeed10m: hourly.variables(2)!.valuesArray()!,
        windDirection10m: hourly.variables(3)!.valuesArray()!,
    },

};

// Calculate the average temperature
let temperatureSum = 0;
for (let i = 0; i < weatherData.hourly.temperature2m.length; i++) {
    temperatureSum += weatherData.hourly.temperature2m[i];
}
const averageTemperature = temperatureSum / weatherData.hourly.temperature2m.length;

// Calculate the average humidity
let humiditySum = 0;
for (let i = 0; i < weatherData.hourly.relativeHumidity2m.length; i++) {
    humiditySum += weatherData.hourly.relativeHumidity2m[i];
}
const averageHumidity = humiditySum / weatherData.hourly.relativeHumidity2m.length;

// Calculate the average wind speed
let windSpeedSum = 0;
for (let i = 0; i < weatherData.hourly.windSpeed10m.length; i++) {
    windSpeedSum += weatherData.hourly.windSpeed10m[i];
}
const averageWindSpeed = windSpeedSum / weatherData.hourly.windSpeed10m.length;

console.log('Average Wind Speed:', averageWindSpeed);


export default function Page() {
  return <div>
      <Header />
      <div><h1 className='flex justify-center pt-20 pb-10 text-4xl font-bold'>POGODA NA JUTRO</h1></div>
        <div>
            <p className='flex justify-center' id={'city'}>Miasto: Łódź</p>
            <p className='flex justify-center' id={'latitude'}>Szerokość geograficzna: {latitude}</p>
            <p className='flex justify-center' id={'longitude'}>Długość geograficzna: {longitude}</p>
            <br></br>
            <p className='flex justify-center' id={'temperature'}>Średnia temperatura (°C): {averageTemperature.toFixed(2)}</p>
            <p className='flex justify-center' id={'humidity'}>Średnia wilgotność powietrza (%): {averageHumidity.toFixed(2)}</p>
            <p className='flex justify-center' id={'windspeed'}>Średnia prędkość wiatru (km/h): {averageWindSpeed.toFixed(2)}</p>
        </div>
      <div>
        <Link className='flex justify-center absolute inset-x-0 bottom-10' href="/">
          <Image
            src="/home.png"  
            alt="strona startowa"
            width={60}  
            height={20} 
          />
      </Link>
      </div>
    </div>    
}
