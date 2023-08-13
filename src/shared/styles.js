import { css } from '@emotion/react';
import { tailwindcssPaletteGenerator } from '@bobthered/tailwindcss-palette-generator';

/*
  0em = 0px
  40em = 640px
  52em = 832px
  64em = 1024px
  75em = 1200px
  usage
  ${mediaQueries.medium} {
  backdrop-filter: none;
}
*/
const breakpointScale = ['40em', '52em', '64em', '75em'];

// Define your colors  60 10 30
const bg = '#040c1b';
const cta = '#ffe009';

const primary = '#c5003c';
const secondary = '#41bf50';
const tertiary = '#f59740';
const quaternary = '#69f8ff';

const sucsess = '#19B53D';
const danger = '#D32B26';
const warning = '#C99002';
const info = '#007FCE';

const shades = tailwindcssPaletteGenerator({
  colors: [
    bg,
    cta,
    primary,
    secondary,
    tertiary,
    quaternary,
    sucsess,
    danger,
    warning,
    info,
  ],
  names: [
    'bg',
    'cta',
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'sucsess',
    'danger',
    'warning',
    'info',
  ],
});
export const tokens = {
  colors: shades,
  gradients: {
    g1: `linear-gradient(180deg, ${shades.primary[300]} 0%, ${shades.primary[700]} 100%)`,
    g2: `linear-gradient(180deg, ${shades.secondary[300]} 0%, ${shades.secondary[700]} 100%)`,
    g3: `linear-gradient(180deg, ${shades.tertiary[300]} 0%, ${shades.tertiary[700]} 100%)`,
    g4: `linear-gradient(180deg, ${shades.quaternary[300]} 0%, ${shades.quaternary[700]} 100%)`,
  },
  spacing: {
    s0: '0',
    shalf: '0.25rem',
    s1: '0.5rem',
    s2: '1rem',
    s3: '1.5rem',
    s4: '2rem',
    s5: '3rem',
    s6: '4rem',
    s7: '8rem',
  },
  typography: {
    type: {
      body: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      headline: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight: {
      regular: '400',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    sizes: [
      '0.875rem',
      '1rem',
      '1.25rem',
      '1.5rem',
      '2rem',
      '2.5rem',
      '3rem',
      '4rem',
    ],
  },
  borderRadius: {
    s: 4,
    m: 8,
    l: 24,
  },
  mediaQueries: {
    medium: `@media screen and (min-width: ${breakpointScale[1]})`,
    large: `@media screen and (min-width: ${breakpointScale[2]})`,
  },
  breakpoints: {
    // not having 'small' breakpoint forces us to build
    // for mobile devices and scale for bigger devices
    default: breakpointScale[0], // mobile phones and higher 0-639px
    medium: breakpointScale[1], // tablets and higher 640px-832px
    large: breakpointScale[2], // laptops and higher >832px
  },
};

console.log('tokens', tokens);
export const defaultTheme = {
  name: 'Default Theme',
  palette: {
    primary: {
      light: 'brandLight',
      main: 'brandPrimary',
      dark: 'brandDark',
      contrastText: 'white',
    },
  },
};
