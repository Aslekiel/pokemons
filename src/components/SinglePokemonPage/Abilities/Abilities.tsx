import type { AbilitiesType } from '../../../types';
import { AbilitiesContainer } from './Abilities.styles';

type PropsType = {
  abilities: AbilitiesType[];
};

export const Abilities: React.FC<PropsType> = ({ abilities }) => {
  return (
    <AbilitiesContainer>
      <h2>Abilities</h2>
      {abilities.map((ability, index) => {
        return (
          <p
            key={index}
          >
            {`Slot ${ability.slot}: ${ability.ability.name}`}
          </p>
        );
      })}
    </AbilitiesContainer>

  );
};
