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

  let cardColor = "";
  let type = pokemon?.types[0].type.name;
  if (type === "grass") {
    cardColor = "grass";
  } else if (type === "fire") {
    cardColor = "fire";
  } else if (type === "bug") {
    cardColor = "bug";
  } else if (type === "normal") {
    cardColor = "normal";
  } else if (type === "water") {
    cardColor = "water";
  }

  const name = pokemon?.name;
  const nameResult = name?.charAt(0).toUpperCase() + name?.slice(1);

  const typesResult = pokemon?.types.map((type) => {
    const name = type.type.name;
    const resultName = name.charAt(0).toUpperCase() + name.slice(1);
    return {
      url: type.type.url,
      name: resultName,
    };
  });

  console.log(typesResult);

  const statesResult = pokemon?.stats.filter((stats) => {
    if (stats.stat.name.includes("-")) return false;
    return stats;
  });

  return (
    <article className={`${cardColor} min-w-[60%] snap-center`}>
      <div>
        <header onClick={handleNavigate} className={`bg-${cardColor}`}>
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <section>
          <h3>{nameResult}</h3>
          <ul>
            {typesResult?.map((typeInfo) => (
              <li key={typeInfo.url}>{typeInfo.name}</li>
            ))}
          </ul>
        </section>
        <footer>
          <ul>
            {statesResult?.map((statInfo) => (
              <li key={statInfo.stat.url}>
                <span>{statInfo.stat.name.toUpperCase()}</span>
                <span>{statInfo.base_stat}</span>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </article>
  );
};

export default PokeCard;
