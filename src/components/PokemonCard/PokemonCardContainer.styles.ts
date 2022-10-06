import styled from 'styled-components';

export const PokemonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pokemon__img {
    cursor: pointer;
  }

  .pokemon__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
