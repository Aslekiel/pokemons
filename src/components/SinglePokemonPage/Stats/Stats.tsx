import type { PokemonStatsType } from '../../../types';
import { StatsContainer } from './Stats.styles';

type PropsType = {
  stats: PokemonStatsType[];
};

export const Stats: React.FC<PropsType> = ({ stats }) => {
  // eslint-disable-next-line no-console
  console.log(stats);
  return (
    <StatsContainer>
      <h2>Pokemon stats</h2>
      {stats.map((stat, index) => {
        return (
          <div key={index}>
            <p>{`${stat.stat.name}: ${stat.base_stat}`}</p>
          </div>
        );
      })}
    </StatsContainer>
  );
};
