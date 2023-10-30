package com.mycom.mybatis.dao;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mycom.mybatis.dto.EmpDto;

@Mapper
public interface EmpDao {
	EmpDto empDetail(int employeeId);
	List<EmpDto>empList();
	int empInsert(EmpDto dto);
	int empUpdate(EmpDto dto);
	int empDelete(int employeeId);
}
