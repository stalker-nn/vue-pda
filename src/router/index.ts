import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
  ]
})

export default router
