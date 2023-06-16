import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer.jsx";
import SearchPokemon from "../components/Pokedex/SearchPokemon.jsx";

const Pokedex = () => {
  const trainerName = useSelector((states) => states.trainerName);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const [allInfo, getApiPoke] = useFetch(url);

  useEffect(() => {
    getApiPoke();
  }, []);

  return (
    <>
      <div>Pokedex</div>
      <h3>
        Bienvenido {trainerName}, aquí podrás encontrar tu pokemón favorito
      </h3>
      <SearchPokemon infoResults={allInfo?.results} />
      <PokeContainer pokemons={allInfo?.results} />
    </>
  );
};

export default Pokedex;
