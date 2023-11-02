package com.mycom.enjoytrip.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycom.enjoytrip.board.dao.BoardDao;
import com.mycom.enjoytrip.board.dto.BoardDto;
@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private BoardDao dao;

	@Override
	public List<BoardDto> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}

	@Override
	public BoardDto detail(int bindex) {
		// TODO Auto-generated method stub
		return dao.detail(bindex);
		}

	@Override
	public int insert(BoardDto dto) {
		// TODO Auto-generated method stub
		return dao.insert(dto);
	}

	@Override
	public int update(BoardDto dto) {
		// TODO Auto-generated method stub
		return dao.update(dto);
	}

	@Override
	public int delete(int bindex) {
		// TODO Auto-generated method stub
		return dao.delete(bindex);
	}

}
