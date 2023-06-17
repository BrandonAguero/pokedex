import { createSlice } from "@reduxjs/toolkit";

const filterNamePokemonSlice = createSlice({
  name: "filterNamePokemon",
  initialState: [],
  reducers: {
    setFilterNamePokemonG: (state, action) => action.payload,
  },
});

export const { setFilterNamePokemonG } = filterNamePokemonSlice.actions;

export default filterNamePokemonSlice.reducer;
