import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import LoginView from '@/views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: UsersView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

export default router
