package com.mycom.mydb.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.mycom.mydb.dto.StudDto;

@Repository
public interface StudDao {
	StudDto studDetail(int studId);
	List<StudDto>studList();
	int studInsert(StudDto dto);
	int studUpdate(StudDto dto);
	int studDelete(int studId);
}
