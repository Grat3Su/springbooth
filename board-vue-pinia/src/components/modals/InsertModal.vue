<template>
  <!-- Modal insert-->
  <div class="modal fade" id="insertModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">글 쓰기</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <input type="text" class="form-control" v-model="title" placeholder="제목" />
          </div>
          <div class="mb-3">
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
          </div>
          <div class="form-check mb-3">
            <input
              v-model="attachFile"
              class="form-check-input"
              type="checkbox"
              value=""
              id="chkFileUploadInsert"
            />
            <label class="form-check-label" for="chkFileUploadInsert">파일 추가</label>
          </div>
          <div class="mb-3" v-show="attachFile" id="imgFileUploadInsertWrapper">
            <input @change="changeFile" type="file" id="inputFileUploadInsert" multiple />
            <div id="imgFileUploadInsertThumbnail" class="thumbnail-wrapper">
              <!-- vue way img 를 만들어서 append 하지 않고, v-for 로 처리 -->
              <img v-for="(file, index) in fileList" v-bind:src="file" v-bind:key="index" />
            </div>
          </div>
          <button
            id="btnBoardInsert"
            class="btn btn-sm btn-primary btn-outline float-end"
            data-bs-dismiss="modal"
            type="button"
            @click="boardInsert"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import http from '@/common/axios.js'

import { ref } from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const ckeditor = CKEditor.component
const editor = ClassicEditor
const editorData = ref('<p>Content of Editor</p>')
const editorConfig = {}

const title = ref('')
const attachFile = ref(false)
const fileList = ref([])

const changeFile = (fileEvent) => {
  fileList.value = [] //thumbnail img 초기화
  const fileArray = Array.from(fileEvent.target.files)
  fileArray.forEach((file) => fileList.value.push(URL.createObjectURL(file)))
}

const boardInsert = async () => {
  let formData = new FormData()
  formData.append('title', title.value)
  formData.append('content', editorData.value)
  let attachFiles = document.querySelector('#inputFileUploadInsert').files

  if (attachFiles.length > 0) {
    const fileArray = Array.from(attachFiles)
    fileArray.forEach((file) => formData.append('file', file))
  }

  let options = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  try {
    let { data } = await http.post('boards', formData, options)
    if (data.result == 'login') {
      doLogout()
    } else {
      //등록 성공
    }
  } catch (error) {
    console.log(error)
  }
}

const doLogout = () => {}
</script>

<style scoped>
/* deep selector >>> -> 함수 deep() */
.modal:deep(.ck-editor__editable) {
  height: 400px;
}

.modal:deep(.thumbnail-wrapper) {
  margin-top: 5px;
}

.modal:deep(.thumbnail-wrapper img) {
  width: 100px !important;
  margin-right: 5px;
  max-width: 100%;
}
</style>
