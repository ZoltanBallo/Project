import { createRouter, createWebHistory } from 'vue-router'
import Domov from '../pages/Domov.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'domov',
      component: Domov
    }
  ]
})

export default router
