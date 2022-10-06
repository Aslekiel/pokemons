import type { AxiosResponse } from 'axios';
import { instance } from '.';
import type { PaginationOptionsType, PaginationType } from '../types';

const getPagination =
  async (options: PaginationOptionsType): Promise<AxiosResponse<PaginationType>> => {
    const booksData = await instance.get(`pokemon/?offset=${options.offset}&limit=${options.limit}`);

    return booksData;
  };

export const pokemonsApi = { getPagination };
