import { createRouter, createWebHistory } from 'vue-router';
// Import Pages
import Home from '../views/Home.vue';

// TODO: Add tracking to page location https://stackoverflow.com/questions/68345229/how-to-change-the-hash-in-the-url-dynamically-when-i-scroll-over-components-in-v

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    // https://stackoverflow.com/questions/54535838/scroll-behaviour-vuejs-not-working-properly
    if (to.hash) {
      const el = window.location.href.split('#')[1];
      if (el.length) {
        const element = document.getElementById(el);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      const element = document.getElementById('app');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    // if (savedPosition) {
    //   return savedPosition;
    // }

    // if (to.hash) {
    //
    //   return {
    //     selector: to.hash,
    //     offset: { x: 0, y: 75 },
    //     behavior: 'smooth',
    //   };
    // }

    // return { x: 0, y: 0 };
  },
});

export default router;
