import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from './stores/user'

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
      path: '/settings',
      name: 'settings',
      component: () => import('./pages/PageSettings.vue'),
    },
    {
      path: '',
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '/plans',
          children: [
            {
              path: '',
              name: 'plans',
              component: () => import('./pages/PagePlans.vue'),

            },
            {
              path: ':id',
              name: 'plan',
              component: () => import('./pages/PagePlan.vue'),
            },
            {
              path: 'new',
              name: 'new-plan',
              component: () => import('./pages/PagePlanNew.vue'),
            },
          ],
        },
        {
          path: '/:matched(.*)*',
          name: 'not-found',
          component: () => import('./pages/Page404.vue'),
        },
      ],
    },

  ],
})
router.beforeEach((to) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth && !userStore.currentUser) {
    return {
      path: '/login',
      query: {
        name: 'login',
        redirect: to.name,
      },
    }
  }
})

export default router
