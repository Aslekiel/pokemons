import { PaginationComponent } from '../Pagination/Pagination';
import { Pokemons } from '../Pokemons/Pokemons';

import { MainContainer } from './Main.styles';

export const Main = () => {
  return (
    <MainContainer>
      <Pokemons />
      <PaginationComponent />
    </MainContainer>
  );
};
