import PokeCard from "./PokeCard.jsx";

const PokeContainer = ({ pokemons }) => {
  return (
    <>
      <div className="row-start-7 row-end-13  ml-auto mr-auto flex w-nine snap-proximity gap-16 overflow-x-scroll overscroll-x-contain m:row-start-6">
        {pokemons?.map((pokemon) => (
          <PokeCard key={pokemon.url} url={pokemon.url} />
        ))}
      </div>
    </>
  );
};

export default PokeContainer;
