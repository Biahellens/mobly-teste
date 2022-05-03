import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 960,
      lg: 1366,
      xl: 1920,
    },
  },

  palette: {
    primary: {
      main: '#e0e7e0',
      dark: '#edece6',
      light: '#e9f7df',
      primary: '#ff4600',
      secondary: '#007693',
    },

    text: {
      primary: '#dbdbdb',
      secondary: '#5f22a8',
      dark: '#1a253b',

    },
  },
}

export type Theme = typeof theme;
export const styledTheme = baseStyled as ThemedStyledInterface<Theme>;
