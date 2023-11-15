package com.mycom.myboard.board.service;

import java.util.List;

import com.mycom.myboard.board.dto.BoardDto;
import com.mycom.myboard.board.dto.BoardParamDto;
import com.mycom.myboard.board.dto.BoardResultDto;

public interface BoardService {
	public BoardResultDto boardList(BoardParamDto dto);

}
