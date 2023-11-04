const Weather = ({ weather }) => {
  if (Object.keys(weather).length) {
    return (
      <div>
        <h2>Weather in {weather.name}</h2>
        <p>temperature {weather.main.temp} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    );
  }

  return <p>getting weather data...</p>;
};

export default Weather;
