// Vuetify
import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetifyVariables = {
  'border-color': '#000000',
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
  'theme-kbd': '#212529',
  'theme-on-kbd': '#FFFFFF',
  'theme-code': '#F5F5F5',
  'theme-on-code': '#000000',
};

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#1867C0',
    secondary: '#5CBBF6',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-accent': '#FFFFFF',
    'on-error': '#FFFFFF',
    'on-info': '#FFFFFF',
    'on-success': '#FFFFFF',
    'on-warning': '#FFFFFF',
    'on-background': '#000000',
    'on-surface': '#000000',
  },
  variables: {
    ...vuetifyVariables,
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#90CAF9',
    secondary: '#A5D6A7',
    accent: '#FF4081',
    error: '#CF6679',
    info: '#29B6F6',
    success: '#66BB6A',
    warning: '#FFA726',
    background: '#121212',
    surface: '#121212',
    'on-primary': '#000000',
    'on-secondary': '#000000',
    'on-accent': '#000000',
    'on-error': '#000000',
    'on-info': '#000000',
    'on-success': '#000000',
    'on-warning': '#000000',
    'on-background': '#FFFFFF',
    'on-surface': '#FFFFFF',
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
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme,
    },
  },
});
