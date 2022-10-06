import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PokemonsType } from '../../types';

const initialState: PokemonsType = {
  pokemons: [],
};

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<PokemonsType | null>) {
      // state.pokemons = action.payload?.pokemons;
    },
  },
});

export const { setPokemons } = pokemons.actions;

export default pokemons.reducer;
