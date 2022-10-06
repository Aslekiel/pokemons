import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pokemonApi } from '../../api/pokemonApi';
import type { SinglePokemonType } from '../../types';
import { Abilities } from './Abilities/Abilities';
import { SinglePokemonPageCContainer } from './SinglePokemonPage.styles';
import { Stats } from './Stats/Stats';

export const SinglePokemonPage = () => {
  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState<SinglePokemonType>();

  useEffect(() => {
    (async () => {
      try {
        const res = await pokemonApi.getPokemonData(Number(id));
        setPokemonData(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <SinglePokemonPageCContainer>
      <div className="pokemon__imgs">
        <h2
          className="pokemon__imgs_title"
        >
          Adult pokemon
        </h2>
        <img
          src={pokemonData?.sprites.front_default}
          alt="pokemon-img"
          className="pokemon__imgs_img"
        />
        <img
          src={pokemonData?.sprites.back_default}
          alt="pokemon-img"
          className="pokemon__imgs_img"
        />
        <h2
          className="pokemon__imgs_title"
        >
          Shiny pokemon
        </h2>
        <img
          src={pokemonData?.sprites.front_shiny}
          alt="pokemon-img"
          className="pokemon__imgs_img"
        />
        <img
          src={pokemonData?.sprites.back_shiny}
          alt="pokemon-img"
          className="pokemon__imgs_img"
        />
      </div>
      <div className="pokemon__info">
        <h2>{`Name: ${pokemonData?.name}`}</h2>
        <p>{`Weight: ${pokemonData?.weight}`}</p>
        <p>{`Height: ${pokemonData?.height}`}</p>
        <p>{`Base experience: ${pokemonData?.base_experience}`}</p>
        {pokemonData?.abilities && <Abilities abilities={pokemonData?.abilities} />}
        {pokemonData?.stats && <Stats stats={pokemonData.stats} />}
      </div>
    </SinglePokemonPageCContainer>
  );
};
