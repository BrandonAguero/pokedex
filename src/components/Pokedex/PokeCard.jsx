import { useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import { useNavigate } from "react-router";
import { useState } from "react";

const PokeCard = ({ url }) => {
  const [pokemon, getOnlyPokemon] = useFetch(url);
  const [cardColor, setCardColor] = useState("");
  const [linearGradient, setLinearGradient] = useState("");

  useEffect(() => {
    getOnlyPokemon();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };

  useEffect(() => {
    setCardColor(pokemon?.types[0].type.name);
    if (cardColor === "grass") {
      setLinearGradient(
        "linear-gradient(178.92deg, #7ec6c5 0.92%, #abdac6 47.96%, #cae099 99.08%)"
      );
    } else if (cardColor === "electric") {
      setLinearGradient(
        "linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)"
      );
    } else if (cardColor === "poison") {
      setLinearGradient(
        "linear-gradient(180.57deg, #5b3184 -45.23%, #c48ef9 158.14%)"
      );
    } else if (cardColor === "normal") {
      setLinearGradient(
        "linear-gradient(181.51deg, #735259 -6.44%, #bc6b7c 121.95%,#7c3f4c 186.11%)"
      );
    } else if (cardColor === "water") {
      setLinearGradient(
        "linear-gradient(179.57deg, #133258 -70.14%,#1479fb 56.16%,#82b2f1 214.85%)"
      );
    } else if (cardColor === "fire") {
      setLinearGradient(
        "linear-gradient(176.37deg, #f96d6f -32.26%, #e35825 22.55%, #e8ae1b 125.72%)"
      );
    } else if (cardColor === "dragon") {
      setLinearGradient(
        "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)"
      );
    } else if (cardColor === "ice") {
      setLinearGradient(
        "linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)"
      );
    } else if (cardColor === "steel") {
      setLinearGradient(
        "linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)"
      );
    } else if (cardColor === "dark") {
      setLinearGradient(
        "linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)"
      );
    } else if (cardColor === "fairy") {
      setLinearGradient(
        "linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)"
      );
    } else if (cardColor === "ground") {
      setLinearGradient(
        "linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)"
      );
    } else if (cardColor === "psychic") {
      setLinearGradient(
        "linear-gradient(180deg, #fffc9d 0, #f1eb85 25%, #d8d86c 50%, #bec653 75%, #a6b53c 100%)"
      );
    } else if (cardColor === "fighting") {
      setLinearGradient(
        "linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)"
      );
    } else if (cardColor === "rock") {
      setLinearGradient(
        "linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)"
      );
    } else if (cardColor === "ghost") {
      setLinearGradient(
        "linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)"
      );
    } else if (cardColor === "bug") {
      setLinearGradient(
        "linear-gradient(177.56deg,#62db60 -58.92%,#3bb039 16.57%, #aaffa8 209.53%)"
      );
    }
  }, [pokemon, cardColor]);

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

  const statesResult = pokemon?.stats.filter((stats) => {
    if (stats.stat.name.includes("-")) return false;
    return stats;
  });

  console.log(statesResult);

  return (
    <article
      className={`${cardColor} h-max min-w-[60%] rounded-xl p-2 sm:min-w-[28rem] sm:snap-center`}
    >
      <div className="w-full overflow-hidden rounded-lg">
        <header
          onClick={handleNavigate}
          className={`flex cursor-pointer justify-center`}
          style={{
            backgroundImage: linearGradient,
          }}
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
