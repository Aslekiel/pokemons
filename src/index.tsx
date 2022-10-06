import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import App from './App/App';
import Global from './global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <Global />
  </ThemeProvider>,
);
