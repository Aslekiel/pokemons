import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: null,
  next: '' || null,
  previous: '' || null,
  results: [],
};

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    // setPokemons(state, action: PayloadAction<PokemonsType | null>) {
    //   // state.results = action.payload?.results;
    // },
  },
});

// export const { setPokemons } = pokemons.actions;

export default pokemons.reducer;
