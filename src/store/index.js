import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.slice.js";
import filterNamePokemon from "./slices/filterNamePokemon.slice.js";
import typesPokemon from "./slices/TypesPokemon.slice.js";

export default configureStore({
  reducer: {
    trainerName,
    filterNamePokemon,
    typesPokemon,
  },
});
