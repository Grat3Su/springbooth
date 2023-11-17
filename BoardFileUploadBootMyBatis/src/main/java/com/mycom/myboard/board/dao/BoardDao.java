package com.mycom.myboard.board.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.mycom.myboard.board.dto.BoardDto;
import com.mycom.myboard.board.dto.BoardFileDto;
import com.mycom.myboard.board.dto.BoardParamDto;

@Mapper
public interface BoardDao {

	// 게시글 한 개 + 딸린 파일들
	BoardDto boardDetail(BoardParamDto boardParamDto);

	List<BoardFileDto> boardDetailFileList(int boardId);

	// map - Dto
	int boardUserReadCount(BoardParamDto boardParamDto);

	// map - @param
	// 읽은거 확인
	int boardUserReadInsert(@Param("boardId") int boardId, @Param("userSeq") int userSeq);

	//조회수 증가
	int boardReadCountUpdate(int boardId);

	int boardDelete(int boardId);

	int boardFileDelete(int boardId);

	List<String> boardFileUrlDeleteList(int boardId);

	int boardReadCountDelete(int boardId);

	int boardInsert(BoardDto dto);

	int boardFileInsert(BoardFileDto dto);

	List<BoardDto> boardList(BoardParamDto boardParamDto);

	int boardListTotalCount();

	List<BoardDto> boardListSearchWord(BoardParamDto boardParamDto);

	int boardListSearchWordTotalCount(BoardParamDto boardParamDto);

	int boardUpdate(BoardDto dto);
}
