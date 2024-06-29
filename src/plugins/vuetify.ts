// Vuetify
import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    transparent: 'rgba(255, 255, 255, 0.5)',
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    transparent: 'rgba(0, 0, 0, 0.5)',
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
