import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Legal from '../views/Legals/LegalNotice.vue';
import Privacy from '../views/Legals/Privacy.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
