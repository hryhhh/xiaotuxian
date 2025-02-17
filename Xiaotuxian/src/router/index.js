import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Home/index.vue')
          
        },
        {
          path: 'category/:id',
          component:()=>import('../views/Category/index.vue')
        },
        {
          path: 'category/sub/:id',
          component: () => import('../views/SubCategory/index.vue')
        },
        {
          path: 'datail/:id',
          component:()=>import('../views/Detail/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/index.vue')
    }
  ]
})

export default router
