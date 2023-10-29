package com.mycom.elec.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mycom.elec.dao.ElecDao;
import com.mycom.elec.dto.ElecDto;
@Service
public class ElecServiceImpl implements ElecService{
	
	
	private final ElecDao dao;
	
	public ElecServiceImpl(ElecDao dao) {
		this.dao = dao;
	}
	
	@Override
	public ElecDto elecDetail(String elecCode) {
		
		return dao.elecDetail(elecCode);
	}

	@Override
	public List<ElecDto> elecList() {
		return dao.elecList();
	}

	@Override
	public int elecInsert(ElecDto dto) {
		return dao.elecInsert(dto);
	}

	@Override
	public int elecUpdate(ElecDto dto) {
		return dao.elecUpdate(dto);
	}

	@Override
	public int elecDelete(String elecCode) {
		return dao.elecDelete(elecCode);
	}

}