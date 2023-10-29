package com.mycom.elec.service;

import java.util.List;

import com.mycom.elec.dto.ElecDto;

public interface ElecService {
	ElecDto elecDetail(String elecCode);
	List<ElecDto>elecList();
	int elecInsert(ElecDto  dto);
	int elecUpdate(ElecDto  dto);
	int elecDelete(String elecCode);
}
