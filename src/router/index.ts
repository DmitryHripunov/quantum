import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  linkActiveClass: 'link-active',
  history: createWebHistory(),
  routes: [
    {
      path: '/quantum',
      name: 'main',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/quantum/store',
      name: 'store',
      component: () => import('../views/StoreView.vue'),
    },
    {
      name: 'notFound',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
