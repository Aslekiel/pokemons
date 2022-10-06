import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 24px;
  }
  
  #root {
    display: flex;
    flex-direction: column;
  }
`;
