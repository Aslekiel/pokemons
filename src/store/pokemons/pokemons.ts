import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PaginationType, PokemonsApiType } from '../../types';

const initialState: PokemonsApiType = {
  pokemons: [],
  pagination: {
    count: null,
    next: '',
    previous: '',
    results: [],
  },
};

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPagination(state, action: PayloadAction<PaginationType>) {
      state.pagination.results = action.payload.results;
    },
  },
});

export const { setPagination } = pokemons.actions;

export default pokemons.reducer;
