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
    <article
      className={`${cardColor} h-max min-w-[60%] snap-center rounded-xl p-2`}
    >
      <div className="w-full overflow-hidden rounded-lg">
        <header
          onClick={handleNavigate}
          className={`bg-${cardColor} flex justify-center`}
        >
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            className="max-w-[10rem] m:relative m:top-12 m:max-w-[15rem]"
            alt=""
          />
        </header>
        <div className="bg-white m:pt-12">
          <section className="flex flex-col m:gap-2">
            <h3 className="text-center text-2xl m:text-4xl">{nameResult}</h3>
            <ul className="flex justify-center gap-2 text-xl text-titleBlack m:text-2xl">
              {typesResult?.map((typeInfo, index) => (
                <>
                  {index < 1 ? "" : <span>/</span>}
                  <li key={typeInfo.url}>{typeInfo.name}</li>
                </>
              ))}
            </ul>
          </section>
          <footer className="flex flex-col m:gap-2">
            <h4 className="text-center text-base text-subParagraph m:text-xl">
              Type
            </h4>
            <div className="bg-gray-200 m:h-[0.1rem]"></div>
            <ul className="grid grid-cols-2 grid-rows-2 m:gap-2">
              {statesResult?.map((statInfo) => (
                <li
                  className="flex flex-col text-center m:text-xl"
                  key={statInfo.stat.url}
                >
                  <span className="text-base text-subParagraph">
                    {statInfo.stat.name.toUpperCase()}
                  </span>
                  <span className="text-2xl m:text-3xl">
                    {statInfo.base_stat}
                  </span>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default PokeCard;
