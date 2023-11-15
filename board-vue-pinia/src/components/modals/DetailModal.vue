<template>
  <!-- Modal detail-->
  <div class="modal fade" id="boardDetailModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">글 상세</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <tbody>
              <tr>
                <td>글번호</td>
                <td id="boardIdDetail">#</td>
              </tr>
              <tr>
                <td>제목</td>
                <td id="titleDetail">#</td>
              </tr>
              <tr>
                <td>내용</td>
                <td id="contentDetail">#</td>
              </tr>
              <tr>
                <td>작성자</td>
                <td id="userNameDetail">#</td>
              </tr>
              <tr>
                <td>작성일시</td>
                <td id="regDtDetail">#</td>
              </tr>
              <tr>
                <td>조회수</td>
                <td id="readCountDetail">#</td>
              </tr>
            </tbody>
          </table>
          <button
            id="btnBoardUpdateUI"
            class="btn btn-sm btn-primary btn-outline"
            data-bs-dismiss="modal"
            type="button"
          >
            글 수정하기
          </button>
          <button
            id="btnBoardDeleteUI"
            class="btn btn-sm btn-warning btn-outline"
            data-bs-dismiss="modal"
            type="button"
          >
            글 삭제하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
