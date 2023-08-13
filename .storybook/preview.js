/** @type { import('@storybook/react').Preview } */
import { tokens } from '../src/shared/styles';
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Light',
          value: tokens.colors.bg[100],
        },
        {
          name: 'Dark',
          value: tokens.colors.bg[900],
        },
        {
          name: 'Themed',
          value: tokens.colors.bg[500],
        },
        {
          name: 'Primery',
          value: tokens.colors.primary[500],
        },
        {
          name: 'Secondary',
          value: tokens.colors.secondary[500],
        },
        {
          name: 'Secundery Light',
          value: tokens.colors.secondary[200],
        },
        {
          name: 'Tertiary Light',
          value: tokens.colors.tertiary[200],
        },
        {
          name: 'Quaternary Light',
          value: tokens.colors.quaternary[200],
        },
        {
          name: 'Primery Light',
          value: tokens.colors.primary[200],
        },
        {
          name: 'Secundery Dark',
          value: tokens.colors.secondary[900],
        },
        {
          name: 'Tertiary Dark',
          value: tokens.colors.tertiary[900],
        },
        {
          name: 'Quaternary Dark',
          value: tokens.colors.quaternary[900],
        },
      ],
    },
  },
};

export default preview;
