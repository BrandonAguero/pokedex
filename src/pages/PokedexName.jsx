import { useParams } from "react-router";
import useFetch from "../hooks/useFetch.js";
import { useEffect, useState } from "react";
import { capitalize } from "@mui/material";

const PokedexName = () => {
  const [cardColor, setCardColor] = useState("");
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemonByName, hasError] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

  useEffect(() => {
    setCardColor(pokemon?.types[0].type.name);
    /*     if (type === "grass") {
      cardColor = "grass";
    } else if (type === "fire") {
      cardColor = "fire";
    } else if (type === "bug") {
      cardColor = "bug";
    } else if (type === "normal") {
      cardColor = "normal";
    } else if (type === "water") {
      cardColor = "water";
    } else if (type === "poison") {
      cardColor = "poison";
    } else if (type === "electric") {
      cardColor = "electric";
    } else if (type === "ghost") {
      cardColor = "ghost";
    } else if (type === "rock") {
      cardColor = "rock";
    } else if (type === "fighting") {
      cardColor = "fighting";
    } else if (type === "psychic") {
      cardColor = "psychic";
    } else if (type === "ground") {
      cardColor = "ground";
    } else if (type === "fairy") {
      cardColor = "fairy";
    } else if (type === "dark") {
      cardColor = "dark";
    } else if (type === "steel") {
      cardColor = "steel";
    } else if (type === "ice") {
      cardColor = "ice";
    } else if (type === "dragon") {
      cardColor = "dragon";
    } */
  }, [pokemon]);

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

  console.log(statesResult);

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
          <article className="max-lg:nap-proximity  row-start-4 row-end-13 m-auto flex h-[90%] max-h-[45rem] w-nine gap-8 m:max-h-[47rem] 2lg:justify-center max-lg:max-w-[41rem]  max-lg:snap-x max-lg:snap-proximity max-lg:overflow-x-scroll max-lg:overscroll-x-contain">
            <header className="flex h-full w-[40rem] max-w-[41rem] flex-col items-center gap-4 border-2 border-gray m:gap-8 max-lg:min-w-full max-lg:snap-center">
              <figure className={`bg-${cardColor}`}>
                <img
                  className="ml-auto mr-auto w-[40%] m:w-[60%] m:max-w-[39rem]"
                  src={pokemon?.sprites.other["official-artwork"].front_default}
                />
              </figure>
              <div>
                <h2
                  className={`text-center text-2xl font-medium text-${cardColor} m:text-3xl`}
                >
                  #{pokemon?.id}
                </h2>
                <h1
                  className={`text text-3xl font-medium text-${cardColor} text-center m:text-4xl`}
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
                      <li className="p-2 text-xl m:text-2xl" key={type}>
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
            <section className="h-full w-[40rem] border-2 border-gray max-lg:min-w-full max-lg:snap-center">
              <div className="flex flex-col gap-8 p-4">
                <h4 className="text-center text-3xl font-medium m:text-4xl">
                  Stats
                </h4>
                <ul>
                  <li className="flex flex-col gap-12 m:gap-16">
                    {statesResult?.map((stat) => (
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
                          <div className="h-8 w-[89vw] bg-life m:h-12"></div>
                        </div>
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            </section>
            <section className="h-full w-[40rem] border-2 border-gray max-lg:min-w-full max-lg:snap-center">
              <div className="flex h-full flex-col gap-8 m:gap-12">
                <h4 className="text-center text-3xl font-medium">Movements</h4>
                <ul className="flex h-full flex-wrap justify-center gap-4 overflow-x-scroll">
                  {movesPokemon?.map((move) => (
                    <li
                      className="rounded-3xl bg-gray p-4 m:text-2xl"
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
