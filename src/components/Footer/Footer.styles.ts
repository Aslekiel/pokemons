import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(p) => p.theme.backgroundColor.main};

  max-width: 1290px;
  width: 100%;

  margin: auto;
  border-radius: 10px 10px 0 0;
  padding: 0 20px;

  .footer__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &_logo {
      width: 100px;
    }

    &_description {
      margin-left: 20px;
    }

  }
`;
