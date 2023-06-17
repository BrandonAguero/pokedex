import { useParams } from "react-router";
import useFetch from "../hooks/useFetch.js";
import { useEffect } from "react";

const PokedexName = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemonByName, hasError] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

  console.log(pokemon);

  return (
    <>
      <div>
        {hasError ? (
          <h1>
            ✖️ El pokemon <span>{name}</span> no existe
          </h1>
        ) : (
          <>
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
            <h2>{pokemon?.name} </h2>
          </>
        )}
      </div>
    </>
  );
};

export default PokedexName;
