import Weather from "./Weather";

const Country = ({ country, weather }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map((lang, i) => (
          <li key={i}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} width="200px" />
      <Weather weather={weather} />
    </div>
  );
};

export default Country;
