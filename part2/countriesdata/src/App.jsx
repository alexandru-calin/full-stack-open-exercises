import { useState, useEffect } from "react";
import countryService from "./services/countries";

import Countries from "./components/Countries";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);

  const initHook = () => {
    countryService
      .getAll()
      .then((initCountries) => setCountries(initCountries));
  };

  const searchHook = () => {
    if (search) {
      setResults(
        countries.filter(({ name }) =>
          name.common.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setResults([]);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleShowClick = (id) => {
    const countryToShow = results.find((country) => country.cca2 === id);
    setResults([countryToShow]);
  };

  useEffect(initHook, []);
  useEffect(searchHook, [search]);

  return (
    <>
      <span>find countries</span>
      <input value={search} onChange={handleSearch} />
      <Countries countries={results} showCountry={handleShowClick} />
    </>
  );
};

export default App;
