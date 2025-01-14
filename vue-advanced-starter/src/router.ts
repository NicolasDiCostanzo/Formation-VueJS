import { createRouter, createWebHistory } from 'vue-router'

// TODO extends router meta

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/PageHome.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/PageLogin.vue'),
    },
    {
      path: '/plans',
      name: 'plans',
      component: () => import('./pages/PagePlans.vue'),
    },
    {
      path: '/:matched(.*)*',
      name: 'not-found',
      component: () => import('./pages/Page404.vue'),
    },
    // TODO add plans routes
  ],
})

// TODO auth guard

export default router
