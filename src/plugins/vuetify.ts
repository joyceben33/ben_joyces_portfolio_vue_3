// Vuetify
import 'vuetify/styles';
import colors from 'vuetify/util/colors';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetifyVariables = {
  // 'border-color': '#000000',
  'border-opacity': 0.12,
  'high-emphasis-opacity': 0.87,
  'medium-emphasis-opacity': 0.6,
  'disabled-opacity': 0.38,
  'idle-opacity': 0.04,
  'hover-opacity': 0.04,
  'focus-opacity': 0.12,
  'selected-opacity': 0.08,
  'activated-opacity': 0.12,
  'pressed-opacity': 0.12,
  'dragged-opacity': 0.08,
  // 'theme-kbd': '#212529',
  // 'theme-on-kbd': '#FFFFFF',
  // 'theme-code': '#F5F5F5',
  // 'theme-on-code': '#000000',
};

const sharedColors = {
  primary: '#1867C0',
  secondary: '#5CBBF6',
  accent: '#8C9EFF', //NOTE: Vue-Typer color
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00',
  'on-primary': '#FFFFFF',
  'on-secondary': '#FFFFFF',
  'on-accent': '#FFFFFF',
  'on-error': '#FFFFFF',
  'on-info': '#FFFFFF',
  'on-success': '#FFFFFF',
  'on-warning': '#FFFFFF',
  lasso: '#fec52e',
  'pacific-arc': '#174c93',
};

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'on-background': '#000000',
    'on-surface': '#000000',
    ...sharedColors,
  },
  variables: {
    ...vuetifyVariables,
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#202124',
    surface: '#202124',
    'on-background': '#FFFFFF',
    'on-surface': '#FFFFFF',
    ...sharedColors,
  },
  variables: {
    ...vuetifyVariables,
  },
};

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
      dark,
    },
    variations: {
      colors: ['primary', 'secondary', 'background', 'surface'],
      lighten: 5,
      darken: 5,
    },
  },
});
