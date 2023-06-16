import PokeCard from "./PokeCard.jsx";

const PokeContainer = ({ pokemons }) => {
  return (
    <>
      <div>
        {pokemons?.map((pokemon) => (
          <PokeCard key={pokemon.url} url={pokemon.url} />
        ))}
      </div>
    </>
  );
};

export default PokeContainer;
