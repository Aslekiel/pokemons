import 'styled-components';

declare module 'styled-components' {
  export type DefaultThemeType = {

    backgroundColor: {
      main: string;
      secondary: string;
      footer: string;
    };
  };
}
