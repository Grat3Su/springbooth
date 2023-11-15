<template>
  <!-- Modal insert-->
  <div class="modal fade" id="boardInsertModal">
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
            <label for="titleInsert" class="form-label">제목</label>
            <input type="text" class="form-control" id="titleInsert" />
          </div>
          <div class="mb-3">
            <label for="contentInsert" class="form-label">내용</label>
            <textarea class="form-control" id="contentInsert" rows="5"></textarea>
          </div>
          <button
            id="btnBoardInsert"
            class="btn btn-sm btn-primary btn-outline float-end"
            data-bs-dismiss="modal"
            type="button"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
