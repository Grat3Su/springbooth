<template>
  <nav class="navbar navbar-dark bg-dark">
    <!-- Navbar content -->
  </nav>

  <nav class="navbar navbar-dark bg-primary">
    <!-- Navbar content -->
  </nav>

  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd">
    <!-- Navbar content -->
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Hidden brand</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item" v-show="!authStore.isLogin">
            <!-- <a class="nav-link" href="#">Login</a> -->
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-show="authStore.isLogin">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
          <li class="nav-item pt-2">
            <img
              v-bind:src="authStore.userProfileImageUrl"
              alt=""
              style="width: 24px; height: 24px; border-radius: 50%"
            />
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import http from '@/common/axios.js'
import notLoginProfileImageUrl from '/src/assets/noProfile.png'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const { authStore, setLogin } = useAuthStore()
const router = useRouter()

const logout = async () => {
  try {
    let { data } = await http.get('/logout')
    console.log(data)

    if (data.result == 'success') {
      //세션 스토리지에 담는다
      sessionStorage.removeItem('isLogin')
      sessionStorage.removeItem('userName')
      sessionStorage.removeItem('userProfileImageUrl')
      console.log(data)

      //store 변경
      setLogin({
        isLogin: false,
        userName: '',
        userProfileImageUrl: notLoginProfileImageUrl
      })

      router.push('/login')
    } else if (data.result == 'fail') {
      alert('이메일 또는 비밀번호를 확인해주세요')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
