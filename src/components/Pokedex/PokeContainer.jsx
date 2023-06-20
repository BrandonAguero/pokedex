import { Pagination, PaginationItem } from "@mui/material";
import PokeCard from "./PokeCard.jsx";
import { useEffect, useState } from "react";

const PokeContainer = ({ pokemons }) => {
  const [page, setPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = page * cardsPerPage;
  const visiblePokemons = pokemons?.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const updateCardsPerPage = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 600 && windowWidth < 650) {
        setCardsPerPage(1);
      } else if (windowWidth > 650 && windowWidth < 920) {
        setCardsPerPage(2);
      } else if (windowWidth >= 920 && windowWidth < 1300) {
        setCardsPerPage(3);
      } else if (windowWidth > 1300) {
        setCardsPerPage(4);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  return (
    <>
      <div className="row-start-7 row-end-13 ml-auto mr-auto flex w-nine gap-16 m:row-start-6 sm:hidden sm:justify-center max-sm:snap-x max-sm:snap-proximity max-sm:overflow-x-scroll max-sm:overscroll-x-contain">
        {pokemons?.map((pokemon) => (
          <PokeCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
      <div className="row-start-6 row-end-13 flex flex-col items-center justify-center gap-8 max-sm:hidden">
        <div className="flex gap-16">
          {visiblePokemons?.map((pokemon) => (
            <PokeCard key={pokemon.name} url={pokemon.url} />
          ))}
        </div>
        <Pagination
          count={Math.ceil(pokemons?.length / cardsPerPage)}
          page={page}
          onChange={handleChange}
          shape="rounded"
          variant="outlined"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              style={{
                backgroundColor: item.page === page ? "#DD1A1A" : "transparent",
                color: item.page === page ? "white" : "inherit",
              }}
            />
          )}
        />
      </div>
    </>
  );
};

export default PokeContainer;
