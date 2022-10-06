import { useMemo } from 'react';
import type { AbilitiesType } from '../../../types';
import { AbilitiesContainer } from './Abilities.styles';

type PropsType = {
  abilities: AbilitiesType[];
};

export const Abilities: React.FC<PropsType> = ({ abilities }) => {
  const pokemonAbilitiesNames = useMemo(() => {
    return abilities.map((item) => item.ability);
  }, [abilities]);

  return (
    <AbilitiesContainer>
      <h2>Abilities</h2>
      {pokemonAbilitiesNames.map((item, index) => {
        return (
          <p
            key={index}
          >
            {`Ability name: ${item.name}`}
          </p>
        );
      })}
      {abilities.map((ability, index) => {
        return (
          <p
            key={index}
          >
            {`Ability slot: ${ability.slot}`}
          </p>
        );
      })}
    </AbilitiesContainer>

  );
};
