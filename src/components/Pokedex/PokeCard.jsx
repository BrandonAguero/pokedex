import { useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";

const PokeCard = ({ url }) => {
  const [pokemon, getOnlyPokemon] = useFetch(url);

  useEffect(() => {
    getOnlyPokemon();
  }, []);

  console.log(pokemon);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default PokeCard;
