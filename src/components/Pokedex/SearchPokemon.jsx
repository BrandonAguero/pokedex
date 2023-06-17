import { useState } from "react";
import ShowPokemonsFilter from "./ShowPokemonsFilter.jsx";
import { useDispatch } from "react-redux";
import { setFilterNamePokemonG } from "../../store/slices/filterNamePokemon.slice.js";

const SearchPokemon = ({ infoResults }) => {
  const dispatch = useDispatch();

  const [namesFilter, setNamesFilter] = useState();
  const [chosenName, setChosenName] = useState("");
  const [foundPokemon, setFoundPokemon] = useState();

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
    const resultPokemon = namesFilter.filter(
      (pokemon) => pokemon.name === valueClickUser
    );
    setFoundPokemon(resultPokemon);
    setChosenName(valueClickUser);
    setNamesFilter([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilterNamePokemonG(foundPokemon));
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
