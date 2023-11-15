<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { useAuthStore } from './stores/authStore'

const { authStore, setLogin } = useAuthStore()
//sessopmStorage에 login된 상태를 확인하면 sessionStorage에 있는 값을 사용해서 authStore 갱신
let isLogin = sessionStorage.getItem('isLogin')
if (isLogin == 'true') {
  let userName = sessionStorage.getItem('userName')
  let userProfileImageUrl = sessionStorage.getItem('userProfileImageUrl')

  setLogin({
    isLogin: true,
    userName: userName,
    userProfileImageUrl: userProfileImageUrl
  })
}
</script>

<style scoped></style>
