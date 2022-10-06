import { useEffect, useMemo, useState } from 'react';
import Pagination from '@mui/material/Pagination';

import { useSearchParams } from 'react-router-dom';

import { paginationApi } from '../../api/paginationApi';

import type { PaginationType } from '../../types';

import { PaginationContainer } from './Pagination.styles';

const limit = 20;

export const PaginationComponent = () => {
  const [pagination, setPagination] = useState<PaginationType>();
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const paginationPages = useMemo(() => {
    return Math.ceil(
      (
        pagination?.count as number) / (limit as number
      ),
    );
  }, [pagination?.count]);

  useEffect(() => {
    (async () => {
      try {
        const res = await paginationApi.getPagination({
          offset,
          limit,
        });
        setPagination(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [offset]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setOffset((value - 1) * limit);
    searchParams.set('page', String(value));
    searchParams.set('limit', String(limit));
    setSearchParams(searchParams);
  };

  return (
    <PaginationContainer>
      {!!pagination &&
        (
          <Pagination
            count={paginationPages}
            page={page}
            onChange={handleChange}
          />
        )
      }
    </PaginationContainer>
  );
};
