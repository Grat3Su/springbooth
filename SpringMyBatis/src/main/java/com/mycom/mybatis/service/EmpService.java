package com.mycom.mybatis.service;

import java.util.List;

import com.mycom.mybatis.dto.EmpDto;

public interface EmpService {
	EmpDto empDetail(int employeeId);
	List<EmpDto>empList();
	int empInsert(EmpDto dto);
	int empUpdate(EmpDto dto);
	int empDelete(int employeeId);
}
