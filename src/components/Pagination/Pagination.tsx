import { useEffect, useMemo, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { pokemonsApi } from '../../api/pokemonsApi';
import type { PaginationType } from '../../types';
import { PaginationContainer } from './Pagination.styles';

export const PaginationComponent = () => {
  const [pagination, setPagination] = useState<PaginationType>();
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(20);

  const paginationPages = useMemo(() => {
    return Math.ceil(
      (
        pagination?.count as number) / (pagination?.results?.length as number
      ),
    );
  }, [pagination?.count, pagination?.results.length]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setOffset((value - 1) * limit);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await pokemonsApi.getPagination({
          offset,
          limit,
        });
        setPagination(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [limit, offset]);

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
