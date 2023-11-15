<template>
  <div class="container">
    <div class="mb-3 mt-5 d-flex justify-content-center">
      <h1 class="display-4">오늘 인터넷에 전화하기</h1>
    </div>
    <div class="mb-3">
      <h2>Login</h2>
    </div>
    <div class="mb-3">
      <label for="userEmail" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="userEmail"
        name="userEmail"
        v-model="authStore.userEmail"
      />
    </div>
    <div class="mb-3">
      <label for="userPassword" class="form-label">제목</label>
      <input
        type="password"
        class="form-control"
        id="userPassword"
        name="userPassword"
        v-model="authStore.userPassword"
      />
    </div>
    <div>
      <button @click="login" class="btn btn-primary">로그인</button>&nbsp;
      <!-- <a href="/users" class="btn btn-success">회원가입</a> -->
      <router-link to="/users" class="btn btn-success">회원가입</router-link>
    </div>
  </div>
</template>
<script setup>
import http from '@/common/axios.js'
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'

const { authStore, setLogin } = useAuthStore()

const router = useRouter()

const login = async () => {
  let loginObj = {
    userEmail: authStore.userEmail,
    userPassword: authStore.userPassword
  }
  try {
    let { data } = await http.post('/login', loginObj)
    console.log(data)

    if (data.result == 'success') {
      //세션 스토리지에 담는다
      sessionStorage.setItem('isLogin', true)
      sessionStorage.setItem('userName', data.userName)
      sessionStorage.setItem('userProfileImageUrl', data.userProfileImageUrl)
      console.log(data)

      //store 변경
      setLogin({
        isLogin: true,
        userName: data.userName,
        userProfileImageUrl: data.userProfileImageUrl
      })

      router.push('/board')
    } else if (data.result == 'fail') {
      alert('이메일 또는 비밀번호를 확인해주세요')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
