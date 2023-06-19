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

  const statesResult = pokemon?.stats.filter((stats) => {
    if (stats.stat.name.includes("-")) return false;
    return stats;
  });

  const moves = pokemon?.moves.filter((move, index) => {
    if (index <= 25) return move;
  });
  console.log(moves);

  return (
    <>
      {hasError ? (
        <h1>
          ✖️ El pokemon <span>{name}</span> no existe
        </h1>
      ) : (
        <>
          <header className="lg relative row-start-1 row-end-4 flex items-center justify-center  m:row-end-4">
            <div className="absolute top-0 z-0 h-full w-full bg-gradient-to-t from-black to-first ">
              <span className="absolute bottom-[-3rem] right-32 bg-elipsePoke bg-contain bg-center bg-no-repeat lg:inline-block lg:h-32 lg:w-32"></span>
            </div>
            <div className="absolute z-10 flex w-nine flex-col items-center gap-8 m:top-16 lg:gap-16 max-m:top-12">
              <figure className="max-w-[54rem]">
                <img src="/png/logo-main.png" alt="Logo principal" />
              </figure>
            </div>
          </header>
          <article>
            <header>
              <figure>
                <img
                  src={pokemon?.sprites.other["official-artwork"].front_default}
                />
              </figure>
              <div>
                <h2>#{pokemon?.id}</h2>
                <h1>{pokemon?.name}</h1>
              </div>
              <ul>
                <li>
                  <span>Peso</span>
                  <span>{pokemon?.weight}</span>
                </li>
                <li>
                  <span>Altura</span>
                  <span>{pokemon?.height}</span>
                </li>
              </ul>
            </header>
            <section>
              <div>
                <h4>Tipo</h4>
                <ul>
                  {pokemon?.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Habilidades</h4>
                <ul>
                  {pokemon?.abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Stats</h4>
                <ul>
                  <li>
                    {statesResult?.map((stat) => (
                      <div>
                        <div>
                          <span>{stat?.stat.name.toUpperCase()}</span>
                          <span>{stat?.base_stat}</span>
                        </div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
              <div>
                <h4>Movements</h4>
                <ul>
                  {moves.map((move) => (
                    <li>{move.move.name}</li>
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
