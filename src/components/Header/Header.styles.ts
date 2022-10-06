import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(p) => p.theme.backgroundColor.main};

  max-width: 1290px;
  width: 100%;

  margin: auto;
  border-radius: 0 0 10px 10px;
  padding: 0 20px;

  .header__logo {
    cursor: pointer;
    width: 100px;
  }

  .header__date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 20%;
  }
`;
