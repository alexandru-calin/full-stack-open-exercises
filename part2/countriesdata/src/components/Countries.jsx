import Country from "./Country";

const Countries = ({ countries, showCountry }) => {
  if (!countries.length) {
    return null;
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map(({ name, cca2 }) => (
          <li key={cca2}>
            {name.common}
            <button onClick={() => showCountry(cca2)}>show</button>
          </li>
        ))}
      </ul>
    );
  }

  return <Country country={countries[0]} />;
};

export default Countries;
