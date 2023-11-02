import { useState, useEffect } from "react";
import personService from "./services/persons";

import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const hook = () => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  };

  useEffect(hook, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const found = persons.find((person) => person.name === newName);
    if (found) {
      // Update existing person's phone number
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .update(found.id, { ...found, number: newNumber })
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== found.id ? p : returnedPerson))
            );
            setNewName("");
            setNewNumber("");
          });
      }
      return;
    } else {
      // Add new person
      const personObj = {
        name: newName,
        number: newNumber,
      };

      personService.create(personObj).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const removePerson = (id) => {
    const { name } = persons.find((p) => p.id === id);

    if (window.confirm(`delete ${name} ?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

  const personsToShow = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons;

  return (
    <>
      <h2>Phonebook</h2>

      <Filter search={search} handleSearchChange={handleSearchChange} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} removePersonById={removePerson} />
    </>
  );
};

export default App;
