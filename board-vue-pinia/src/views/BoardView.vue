<template>
  <div class="container mt-3">
    <!-- mt-3 추가 -->

    <h4 class="text-center">게시판 - Main</h4>

    <div class="input-group mb-3 mt-3">
      <!-- mb-3 mt-3  추가 -->
      <input id="inputSearchWord" type="text" class="form-control" placeholder="Search" />
      <button id="btnSearchWord" class="btn btn-success" type="button">Search</button>
    </div>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일시</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody id="boardTbody">
        <tr v-for="(board, index) in boardStore.list" :key="board.boardId">
          <td>{{ board.boardId }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.userName }}</td>
          <td>{{ util.makeDateStr(board.regDt.date, '/') }}</td>
          <td>{{ board.readCount }}</td>
        </tr>
      </tbody>
    </table>

    <!-- <div id="paginationWrapper"></div> -->

    <PaginationUI></PaginationUI>
    <insert-modal></insert-modal>
    <update-modal></update-modal>
    <detail-modal></detail-modal>

    <button class="btn btn-sm btn-primary" @click="showInsertModal">글쓰기</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
//component
import PaginationUI from '../components/PaginationUI.vue'
import InsertModal from '../components/modals/InsertModal.vue'
import UpdateModal from '../components/modals/UpdateModal.vue'
import DetailModal from '../components/modals/DetailModal.vue'

import util from '@/common/util.js'

import http from '@/common/axios.js'
import { useBoardStore } from '../stores/boardStore'
// import { useRouter } from 'vue-router'

//bootstrap 객체 생성
import { Modal } from 'bootstrap'

const { boardStore, boardList } = useBoardStore()
// const router = useRouter()
let insertModal = null
let updateModal = null
let detailModal = null
onMounted(() => {
  insertModal = new Modal(document.getElementById('insertModal')) // relatedTarget
  updateModal = new Modal(document.getElementById('updateModal')) // relatedTarget
  detailModal = new Modal(document.getElementById('detailModal')) // relatedTarget
})

const showInsertModal = () => insertModal.show()
boardList()
</script>
