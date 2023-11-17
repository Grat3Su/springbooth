import { reactive } from 'vue'
import { defineStore } from 'pinia'
import notLoginProfileImageUrl from '/src/assets/noProfile.png'

export const useAuthStore = defineStore('authStore', () => {
  //로그인여부, 사용자 이름, 프로필 이미지, 로그인 항목
  const authStore = reactive({
    isLogin: false,

    userName: '',
    userProfileImageUrl: notLoginProfileImageUrl,

    userEmail: 'gg@d.vom',
    userPassword: '1234'
  })

  //loging 후 변경
  // const setLogin = (payload) => {
  //   console.log(payload)
  //   authStore.isLogin = payload.isLogin
  //   authStore.userName = payload.userName
  //   authStore.userProfileImageUrl = payload.userProfileImageUrl
  //   console.log(authStore)
  // }

  const setLogin = (payload) => {
    sessionStorage.setItem('isLogin', 'true')
    sessionStorage.setItem('userName', payload.userName)
    sessionStorage.setItem('userProfileImageUrl', payload.userProfileImageUrl)

    authStore.isLogin = payload.isLogin
    authStore.userName = payload.userName
    authStore.userProfileImageUrl = payload.userProfileImageUrl
    // console.log(authStore)
  }

  const setLogout = () => {
    sessionStorage.removeItem('isLogin')
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('userProfileImageUrl')

    authStore.isLogin = false
    authStore.userName = ''
    authStore.userProfileImageUrl = notLoginProfileImageUrl
  }

  return { authStore, setLogin, setLogout }
})
