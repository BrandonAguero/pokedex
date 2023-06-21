import { useParams } from "react-router";
import useFetch from "../hooks/useFetch.js";
import { useEffect, useState } from "react";

const PokedexName = () => {
  const [cardColor, setCardColor] = useState("");
  const [linearGradient, setLinearGradient] = useState("");
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemonByName, hasError] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

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

  const statesResult = pokemon?.stats.filter((stats) => {
    if (stats.stat.name.includes("-")) return false;
    return stats;
  });

  const namePokemon = pokemon?.name;
  const capitalizeNamePokemon =
    namePokemon?.charAt(0).toUpperCase() + namePokemon?.slice(1);

  const typesPokemon = pokemon?.types.map((type) => {
    const nameType = type.type.name;
    const capitalizeName = nameType.charAt(0).toUpperCase() + nameType.slice(1);
    return capitalizeName;
  });

  const abilitiesPokemon = pokemon?.abilities.map((ability) => {
    const nameAbility = ability.ability.name;
    const capitalizeName =
      nameAbility.charAt(0).toUpperCase() + nameAbility.slice(1);
    return capitalizeName;
  });

  const movesPokemon = pokemon?.moves.map((move) => {
    const nameMove = move.move.name;
    const capitalizeName = nameMove.charAt(0).toUpperCase() + nameMove.slice(1);
    return capitalizeName;
  });

  return (
    <>
      {hasError ? (
        <h1>
          ✖️ El pokemon <span>{name}</span> no existe
        </h1>
      ) : (
        <>
          <header className="lg relative row-start-1 row-end-4 flex items-center justify-center">
            <div className="absolute top-0 z-0 h-full w-full bg-gradient-to-t from-black to-first ">
              <span className="absolute bottom-[-3rem] right-32 bg-elipsePoke bg-contain bg-center bg-no-repeat lg:inline-block lg:h-32 lg:w-32"></span>
            </div>
            <div className="absolute z-10 flex w-nine flex-col items-center gap-8 m:top-16 lg:gap-16 max-m:top-12">
              <figure className="max-w-[54rem]">
                <img src="/png/logo-main.png" alt="Logo principal" />
              </figure>
            </div>
          </header>
          <article className="row-start-4 row-end-13 m-auto flex h-[98%] max-h-[45rem] w-[98%] gap-8 m:max-h-[50rem] 2lg:justify-center max-lg:max-w-[41rem] max-lg:snap-x max-lg:snap-proximity  max-lg:flex-col max-lg:overflow-x-scroll max-lg:overscroll-x-contain max-m:h-[97%]">
            <header className="flex h-full w-[31rem] flex-col items-center gap-4 border-2 border-gray p-4 m:min-w-full m:gap-8 max-lg:snap-center max-m:min-w-[70%]">
              <figure
                className={`bg-${cardColor} w-full`}
                style={{ backgroundImage: linearGradient }}
              >
                <img
                  className="ml-auto mr-auto w-[40%] m:w-[60%] m:max-w-[39rem]"
                  src={pokemon?.sprites.other["official-artwork"].front_default}
                />
              </figure>
              <div>
                <h2
                  className={`${cardColor} bg-transparent text-center text-2xl font-medium text-${cardColor} m:text-3xl`}
                >
                  #{pokemon?.id}
                </h2>
                <h1
                  className={`${cardColor} text bg-transparent text-3xl font-medium text-${cardColor} text-center m:text-4xl`}
                >
                  {capitalizeNamePokemon}
                </h1>
              </div>
              <ul className="flex w-4/5 justify-between font-roboto">
                <li className="flex flex-col items-center">
                  <span className="m:text-2xl">Peso</span>
                  <span className="text-3xl font-medium m:text-4xl">
                    {pokemon?.weight}
                  </span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="m:text-2xl">Altura</span>
                  <span className="text-3xl font-medium m:text-4xl">
                    {pokemon?.height}
                  </span>
                </li>
              </ul>
              <div className="flex w-nine items-center justify-between gap-4 font-roboto">
                <div className="flex h-full flex-col gap-4">
                  <h4 className="text-center text-4xl font-medium m:text-5xl">
                    Tipo
                  </h4>
                  <ul className="flex justify-center gap-4">
                    {typesPokemon?.map((type) => (
                      <li
                        className={`p-2 text-xl text-white m:text-2xl ${type.toLowerCase()}`}
                        key={type}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex h-full flex-col gap-4">
                  <h4 className="text-center text-4xl font-medium m:text-5xl">
                    Habilidades
                  </h4>
                  <ul className="flex justify-center gap-4">
                    {abilitiesPokemon?.map((ability) => (
                      <li
                        className="border-2 border-gray p-2 text-center text-xl m:text-2xl"
                        key={ability}
                      >
                        {ability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </header>
            <section className="h-full w-[31rem] border-2 border-gray m:min-w-full max-lg:snap-center max-m:min-w-[70%]">
              <div className="flex flex-col gap-8 p-4">
                <h4 className="text-center text-3xl font-medium m:text-4xl">
                  Stats
                </h4>
                <ul className="flex flex-col gap-4 m:gap-8">
                  {statesResult?.map((stat) => (
                    <li className="flex flex-col gap-12 m:gap-16">
                      <div className="flex flex-col gap-2 ">
                        <div className="flex justify-between">
                          <span className="text-xl font-semibold m:text-2xl">
                            {stat?.stat.name.toUpperCase()}
                          </span>
                          <span className="font-semibold m:text-2xl">
                            {stat?.base_stat}/255
                          </span>
                        </div>
                        <div
                          className="overflow-x-hidden"
                          style={{ width: `${(stat?.base_stat * 100) / 255}%` }}
                        >
                          <div className="h-8 w-[91vw] bg-life m:h-12 m:w-[90vw] 2m:w-[77vw] sm:w-[65vw] 3sm:w-[50vw] lg:w-[40vw] 2lg:w-[28vw]"></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="h-max w-[31rem] border-2 border-gray m:min-w-full max-lg:snap-center max-m:min-w-[70%] ">
              <div className="flex h-full flex-col gap-8 m:gap-12">
                <h4 className="text-center text-3xl font-medium">Movements</h4>
                <ul className="flex h-full flex-wrap justify-center gap-4 2lg:overflow-y-scroll">
                  {movesPokemon?.map((move) => (
                    <li
                      className="h-12 w-max rounded-3xl bg-gray p-4 m:h-16 m:text-2xl"
                      key={move}
                    >
                      {move}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </article>
        </>
      )}
    </>
  );
};

export default PokedexName;
