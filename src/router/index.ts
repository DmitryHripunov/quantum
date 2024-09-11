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
      path: '/quantum/boost',
      name: 'boost',
      component: () => import('../views/BoostView.vue'),
    },
    {
      path: '/quantum/friends',
      name: 'friends',
      component: () => import('../views/FriendsViews.vue'),
    },
    {
      path: '/quantum/tasks',
      name: 'tasks',
      component: () => import('../views/TasksView.vue'),
    },
    {
      name: 'notFound',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
