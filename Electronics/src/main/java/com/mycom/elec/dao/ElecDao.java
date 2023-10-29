package com.mycom.elec.dao;

import java.util.List;

import com.mycom.elec.dto.ElecDto;

public interface ElecDao {
	ElecDto elecDetail(String elecCode);
	List<ElecDto>elecList();
	int elecInsert(ElecDto  dto);
	int elecUpdate(ElecDto  dto);
	int elecDelete(String elecCode);
}
