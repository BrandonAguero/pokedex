import { useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import { useNavigate } from "react-router";

const PokeCard = ({ url }) => {
  const [pokemon, getOnlyPokemon] = useFetch(url);

  useEffect(() => {
    getOnlyPokemon();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };

  return (
    <article>
      <header onClick={handleNavigate}>
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section>
        <h3>{pokemon?.name}</h3>
        <ul>
          {pokemon?.types.map((typeInfo) => (
            <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
          ))}
        </ul>
      </section>
      <footer>
        <ul>
          {pokemon?.stats.map((statInfo) => (
            <li key={statInfo.stat.url}>
              <span>{statInfo.stat.name}</span>
              <span>{statInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default PokeCard;
