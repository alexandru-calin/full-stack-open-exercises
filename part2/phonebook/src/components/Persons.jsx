const Persons = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map(({ name, number }) => (
        <li key={name}>
          {name} {number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
