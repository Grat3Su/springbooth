package com.mycom.enjoytrip.attr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mycom.enjoytrip.attr.dao.AttrDao;
import com.mycom.enjoytrip.attr.dto.AttrDto;
import com.mycom.enjoytrip.attr.dto.LocDto;

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

	@Override
	public List<LocDto> sido() {
		// TODO Auto-generated method stub
		return dao.sido();
	}

	@Override
	public List<LocDto> gugun(int sidoCode) {
		// TODO Auto-generated method stub
		return dao.gugun(sidoCode);
	}

	@Override
	public List<AttrDto> sidoList(int sidoCode, int pageIdx) {
		// TODO Auto-generated method stub
		return dao.sidoList(sidoCode, pageIdx);
	}

	@Override
	public List<AttrDto> gugunList(int sidoCode, int gugunCode, int pageIdx) {
		// TODO Auto-generated method stub
		return dao.gugunList(sidoCode, gugunCode, pageIdx);
	}

}
