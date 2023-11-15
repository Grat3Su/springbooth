import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import http from '@/common/axios.js'

//store에서 라우터를 가지고 오는 방식
//definestore 안에 선언
export const useBoardStore = defineStore('boardStore', () => {
  const router = useRouter()

  //로그인여부, 사용자 이름, 프로필 이미지, 로그인 항목
  const boardStore = reactive({
    limit: 10,
    offset: 0,
    list: []
  })

  const setBoardList = (list) => (boardStore.list = list)

  const boardList = async () => {
    let params = {
      limit: boardStore.limit,
      offset: boardStore.offset
    }
    try {
      let { data } = await http.get('/boards', { params }) // {params:params}의 short property
      console.log(data)

      if (data.result == 'login') {
        router.push('/login')
      } else {
        setBoardList(data.list)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { boardStore, boardList }
})
