import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import LoginView from '@/views/LoginView.vue'
import BoardView from '@/views/BoardView.vue'

import { useAuthStore } from '../stores/authStore'
//여기에 store를 만들면 안된다!
//const store = userActivation()

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
    },
    {
      path: '/board',
      name: 'Board',
      component: BoardView,
      beforeEnter: (to, from, next) => {
        //authstore.islogin 확인 후 분기
        const { authStore } = useAuthStore()
        let ssLogin = sessionStorage.getItem('isLogin')

        if (authStore.isLogin || ssLogin == 'true') {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/',
      component: BoardView
    }
  ]
})

export default router
