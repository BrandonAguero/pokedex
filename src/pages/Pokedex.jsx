import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer.jsx";
import { useNavigate } from "react-router";
import axios from "axios";
import Select from "react-select";

const Pokedex = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: "all-pokemons",
    label: "Todos los pokemones",
  });

  const trainerName = useSelector((states) => states.trainerName);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  const urlTypes = "https://pokeapi.co/api/v2/type";

  const [allInfo, getApiPoke, hasError, setAllInfo] = useFetch(url);
  const [types, getAllTypes] = useFetch(urlTypes);

  const [namesFilter, setNamesFilter] = useState();
  const [chosenName, setChosenName] = useState("");

  const options = types?.results.map((type) => {
    const name = type.name;
    return {
      value: type.url,
      label: name.charAt(0).toUpperCase() + name.slice(1),
    };
  });
  options?.unshift({
    value: "all-pokemons",
    label: "Todos los pokemones",
  });

  useEffect(() => {
    if (selectedOption.value === "all-pokemons") {
      getApiPoke();
    } else {
      axios
        .get(selectedOption.value)
        .then((res) => {
          const data = {
            results: res.data.pokemon.map((pokeInfo) => pokeInfo.pokemon),
          };
          setAllInfo(data);
        })
        .catch((err) => console.log(err));
    }
  }, [selectedOption]);

  useEffect(() => {
    getAllTypes();
  }, []);

  const allNamesPokemons = allInfo?.results.map((pokemon) => {
    const name = pokemon.name;
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  const searchPokemon = useRef();
  const navigate = useNavigate();

  const valueNamePokemon = (e) => {
    const searchInputValue = e.target.value.trim();
    const pokemonsFilterForName = allNamesPokemons?.filter((pokemon) => {
      const lowercasePokemon = pokemon.toLowerCase();
      return lowercasePokemon.includes(searchInputValue.toLowerCase());
    });

    if (searchInputValue.length) {
      setNamesFilter(pokemonsFilterForName);
      setChosenName(searchInputValue);
    } else {
      setNamesFilter([]);
      setChosenName(searchInputValue);
    }
  };

  const handleCaptureName = (e) => {
    const valueClickUser = e.target.textContent;
    setChosenName(valueClickUser);
    setNamesFilter([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = searchPokemon.current.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <header className="relative row-start-1 row-end-7 flex items-center justify-center m:row-end-6">
        <div className="absolute top-0 z-0 h-2/6 w-full bg-gradient-to-t from-black to-first m:h-[37%] 2m:h-[44%]">
          <span className="absolute bottom-[-3rem] right-32 bg-elipsePoke bg-contain bg-center bg-no-repeat lg:inline-block lg:h-32 lg:w-32"></span>
        </div>
        <div className="relative z-10 flex w-nine flex-col items-center gap-8 lg:gap-16">
          <figure className="max-w-[54rem]">
            <img src="/png/logo-main.png" alt="Logo principal" />
          </figure>
          <div>
            <h2 className="text-center font-inter text-2xl text-titleRed lg:text-4xl">
              Bienvenido {trainerName},{" "}
              <span className="text-paragraph">
                aquí podrás encontrar tu pokemón favorito
              </span>
            </h2>
          </div>
          <form
            className="flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-8"
            onSubmit={handleSubmit}
          >
            <div className="relative font-roboto">
              <input
                className="phone:w-[26rem] w-[22rem] p-4 text-2xl shadow-lg placeholder:text-2xl placeholder:font-medium focus:outline-button sm:w-[35rem] lg:p-8 lg:text-4xl lg:placeholder:text-4xl"
                ref={searchPokemon}
                type="text"
                placeholder="Busca un pokemón"
                value={chosenName}
                onChange={valueNamePokemon}
              />
              <button className="bg-button p-4 text-2xl text-white lg:p-8 lg:text-4xl">
                Search
              </button>
              <ul
                className="absolute top-20 z-10 max-h-96 w-full overflow-y-scroll rounded-lg bg-slate-50 m:top-[4.2rem] sm:top-[4.3rem] lg:top-28"
                onClick={handleCaptureName}
                style={{ padding: `${namesFilter?.length ? "1rem" : "0rem"}` }}
              >
                {namesFilter?.map((name) => (
                  <li
                    className="cursor-pointer gap-4 font-roboto text-2xl font-normal text-paragraph"
                    key={name}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[21rem]  font-roboto text-2xl shadow-lg lg:h-[6.5rem] lg:w-[32rem] lg:p-6 lg:text-4xl">
              <Select
                options={options}
                value={selectedOption}
                onChange={handleChange}
                isSearchable={false}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "none",
                    boxShadow: "none",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    cursor: "pointer",
                    ":hover": {
                      background: "#ED8F8F",
                      color: "white",
                    },
                    background: state.isSelected ? "#ED8F8F" : "transparent",
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#ED8F8F",
                  },
                })}
              />
            </div>
          </form>
        </div>
      </header>
      <PokeContainer pokemons={allInfo?.results} />
    </>
  );
};

export default Pokedex;
