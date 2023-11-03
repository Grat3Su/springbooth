package com.mycom.enjoytrip.attr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mycom.enjoytrip.attr.dao.AttrDao;
import com.mycom.enjoytrip.attr.dto.AttrDto;

@Service
public class AttrServiceImpl implements AttrService{
	
	@Autowired
	AttrDao dao;
	
	@Override
	public List<AttrDto> list(int pageIdx) {
		pageIdx = pageIdx*10;

		return dao.list(pageIdx);
	}

	@Override
	public AttrDto detail(int contentId) {
		// TODO Auto-generated method stub
		return dao.detail(contentId);
	}

	@Override
	@Transactional
	public int insert(AttrDto dto) {
		dao.insert(dto);
		return dao.insert2(dto);
	}

	@Override
	@Transactional
	public int update(AttrDto dto) {
		// TODO Auto-generated method stub
		dao.update(dto);
		return dao.update2(dto);
	}

	@Override
	public int delete(int contentId) {
		dao.delete(contentId);
		return dao.delete2(contentId);
	}

}
