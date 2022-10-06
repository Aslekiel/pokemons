import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { SinglePokemonType } from '../types';

const getPokemonData =
  async (id: number): Promise<AxiosResponse<SinglePokemonType>> => {
    const booksData = await instance.get(`pokemon/${id}`);

    return booksData;
  };

export const pokemonApi = { getPokemonData };
