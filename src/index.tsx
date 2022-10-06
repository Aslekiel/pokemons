import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';

import App from './App/App';
import Global from './global';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Global />
    </Provider>

  </ThemeProvider>,
);
