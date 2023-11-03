package com.mycom.enjoytrip.attr.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mycom.enjoytrip.attr.dto.AttrDto;

@Mapper
public interface AttrDao {
	List<AttrDto>list(int pageIdx);
	AttrDto detail(int contentId);
	int insert(AttrDto dto);
	int insert2(AttrDto dto);
	int update(AttrDto dto);
	int update2(AttrDto dto);
	int delete(int contentId);
	int delete2(int contentId);
}
