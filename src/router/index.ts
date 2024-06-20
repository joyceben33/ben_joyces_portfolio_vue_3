import { createMemoryHistory, createRouter } from 'vue-router';
// Import Pages
import Home from '../views/Home.vue';

// TODO: Add tracking to page location https://stackoverflow.com/questions/68345229/how-to-change-the-hash-in-the-url-dynamically-when-i-scroll-over-components-in-v

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 75 },
        behavior: 'smooth',
      };
    }

    return { x: 0, y: 0 };
  },
});

export default router;
