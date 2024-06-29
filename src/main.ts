import { createApp } from 'vue';
import './assets/style/app.scss';
import App from './App.vue';
import vuetify from './plugins/vuetify';

// Vue Router
import router from './router';

// VueTyper
import VueTyper from 'vue3-typer';

createApp(App).use(vuetify).use(router).component('VueTyper', VueTyper).mount('#app');
