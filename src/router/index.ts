import { createRouter, createWebHistory } from 'vue-router';

const ROUTE: { [key: string]: string } = {
  home: '/',
  about: '/about',
  notFound: 'notFound',
}

const router = createRouter({
  linkActiveClass: 'link-active',
  history: createWebHistory(ROUTE.home),
  routes: [
    {
      path: ROUTE.home,
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: ROUTE.about,
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      name: 'notFound',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
