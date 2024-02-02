
const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=51.7706&longitude=19.4739&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m&forecast_days=1';
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(res => console.log(res))
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });