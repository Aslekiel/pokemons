import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pokemonApi } from '../../api/pokemonApi';
import type { SinglePokemonType } from '../../types';
import { PokemonCardContainer } from './PokemonCardContainer.styles';

type PropsType = {
  id: number;
};

export const PokemonCard: React.FC<PropsType> = ({ id }) => {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType>();

  useEffect(() => {
    (async () => {
      try {
        const res = await pokemonApi.getPokemonData(+id);
        setPokemonData(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <PokemonCardContainer>
      <Link to={`/pokemon/${id}`}>
        <img
          src={pokemonData?.sprites.front_default}
          alt="pokemon-img"
          className="pokemon__img"
        />
      </Link>
      <div className="pokemon__info">
        <h2>{`Name: ${pokemonData?.name}`}</h2>
        <p>{`Weight: ${pokemonData?.weight}`}</p>
        <p>{`Height: ${pokemonData?.height}`}</p>
        <p>{`Base experience: ${pokemonData?.base_experience}`}</p>
      </div>
    </PokemonCardContainer>
  );
};
