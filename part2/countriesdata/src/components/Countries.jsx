import Country from "./Country";

const Countries = ({ countries }) => {
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
          <li key={cca2}>{name.common}</li>
        ))}
      </ul>
    );
  }

  return <Country country={countries[0]} />;
};

export default Countries;
