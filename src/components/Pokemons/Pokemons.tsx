import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { PokemonsContainer } from './Pokemons.styles';

export const Pokemons = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') || 1;
  const limit = searchParams.get('limit') || 20;

  const pokemonIdsArray = useMemo(() => {
    const arr = [];
    const firstValue = Number(limit) * (Number(page) - 1) + 1;
    for (let i = firstValue; i < Number(limit) * (Number(page) - 1) + Number(limit) + 1; i++) {
      arr.push(i);
    }
    return arr;
  }, [limit, page]);

  return (
    <PokemonsContainer>
      {pokemonIdsArray.map((id) => {
        return (
          <PokemonCard
            key={id}
            id={id}
          />
        );
      })}
    </PokemonsContainer>
  );
};
