<template>
  <!-- Modal update-->
  <div class="modal fade" id="boardUpdateModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">글 수정</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="titleUpdate" class="form-label">제목</label>
            <input type="text" class="form-control" id="titleUpdate" />
          </div>
          <div class="mb-3">
            <label for="contentUpdate" class="form-label">내용</label>
            <textarea class="form-control" id="contentUpdate" rows="5"></textarea>
          </div>
          <button
            id="btnBoardUpdate"
            class="btn btn-sm btn-primary btn-outline float-end"
            data-bs-dismiss="modal"
            type="button"
          >
            수정
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
