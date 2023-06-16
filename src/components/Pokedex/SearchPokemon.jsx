import { useState } from "react";
import ShowPokemonsFilter from "./ShowPokemonsFilter.jsx";

const SearchPokemon = ({ infoResults }) => {
  const [namesFilter, setNamesFilter] = useState();
  const [chosenName, setChosenName] = useState("");

  console.log(namesFilter);

  const valueNamePokemon = (e) => {
    const searchInputValue = e.target.value.trim().toLowerCase();
    const pokemonsFilterForName = infoResults.filter((pokemon) => {
      return pokemon.name.includes(searchInputValue);
    });
    if (searchInputValue.length) {
      setNamesFilter(pokemonsFilterForName);
      setChosenName(searchInputValue);
    } else {
      setNamesFilter([]);
      setChosenName(searchInputValue);
    }
  };

  const handleCaptureName = (e) => {
    const valueClickUser = e.target.textContent;
    setChosenName(valueClickUser);
    setNamesFilter([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={valueNamePokemon}
          value={chosenName}
          placeholder="Busca un pokemón"
        />
        <input type="submit" />
      </form>
      <ul onClick={handleCaptureName}>
        {namesFilter?.map((name) => (
          <ShowPokemonsFilter key={name.url} name={name.name} />
        ))}
      </ul>
    </>
  );
};

export default SearchPokemon;
