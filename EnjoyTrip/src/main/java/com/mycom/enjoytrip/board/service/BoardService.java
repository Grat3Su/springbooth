package com.mycom.enjoytrip.board.service;

import java.util.List;

import com.mycom.enjoytrip.board.dto.BoardDto;

public interface BoardService {
	List<BoardDto>list();
	BoardDto detail(int bindex);
	int insert(BoardDto dto);
	int update(BoardDto dto);
	int delete(int bindex);
}
