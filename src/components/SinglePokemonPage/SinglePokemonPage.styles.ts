import styled from 'styled-components';

export const SinglePokemonPageCContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  
  max-width: 1290px;
  width: 60%;
  height: 78vh;
  
  margin: auto;
  padding: 20px 0;

  gap: 10px 80px;

  .pokemon__imgs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &_title {
      grid-column: 1/3;
      justify-self: center;
    }

    &_img {
      width: 120%;
    }
  }

  .pokemon__info {
    padding-left: 50px;
  }
`;
