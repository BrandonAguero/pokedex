import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer.jsx";
import { useNavigate } from "react-router";
import axios from "axios";

const Pokedex = () => {
  const [selectValue, setSelectValue] = useState("all-pokemons");

  const trainerName = useSelector((states) => states.trainerName);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const urlTypes = "https://pokeapi.co/api/v2/type";

  const [allInfo, getApiPoke, hasError, setAllInfo] = useFetch(url);
  const [types, getAllTypes] = useFetch(urlTypes);

  useEffect(() => {
    if (selectValue === "all-pokemons") {
      getApiPoke();
    } else {
      axios
        .get(selectValue)
        .then((res) => {
          const data = {
            results: res.data.pokemon.map((pokeInfo) => pokeInfo.pokemon),
          };
          setAllInfo(data);
        })
        .catch((err) => console.log(err));
    }
  }, [selectValue]);

  useEffect(() => {
    getAllTypes();
  }, []);

  const searchPokemon = useRef();
  const navigate = useNavigate();

  console.log(types);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = searchPokemon.current.value.trim();
    navigate(`/pokedex/${inputValue}`);
  };

  const handleChangeType = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <div>Pokedex</div>
      <h3>
        Bienvenido {trainerName}, aquí podrás encontrar tu pokemón favorito
      </h3>
      <form onSubmit={handleSubmit}>
        <input ref={searchPokemon} type="text" />
        <button>Search</button>
        <select onChange={handleChangeType}>
          <option value="all-pokemons">Todos los pokemones</option>
          {types?.results.map((typeInfo) => (
            <option key={typeInfo.url} value={typeInfo.url}>
              {typeInfo.name}
            </option>
          ))}
        </select>
      </form>
      <PokeContainer pokemons={allInfo?.results} />
    </>
  );
};

export default Pokedex;
