import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  max-width: 1290px;
  width: 100%;

  margin: auto;
  padding: 0 10px;

  .main__pokemon-card {
    margin: 0 5px;
  }
`;
