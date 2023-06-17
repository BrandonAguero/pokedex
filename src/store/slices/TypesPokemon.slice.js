import { createSlice } from "@reduxjs/toolkit";

const typesPokemonSlice = createSlice({
  name: "typesPokemon",
  initialState: [],
  reducers: {
    setTypesPokemonG: (state, action) => action.payload,
  },
});

export const { setTypesPokemonG } = typesPokemonSlice.actions;

export default typesPokemonSlice.reducer;
