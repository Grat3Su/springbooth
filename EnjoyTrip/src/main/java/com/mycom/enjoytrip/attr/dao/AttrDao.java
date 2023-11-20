package com.mycom.enjoytrip.attr.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mycom.enjoytrip.attr.dto.AttrDto;
import com.mycom.enjoytrip.attr.dto.LocDto;

@Mapper
public interface AttrDao {
	List<AttrDto>list(int pageIdx);
	List<AttrDto>sidoList(int sidoCode, int pageIdx);
	List<AttrDto>gugunList(int sidoCode, int gugunCode, int pageIdx);
	List<LocDto> sido();
	List<LocDto> gugun(int sidoCode);
	AttrDto detail(int contentId);
	int insert(AttrDto dto);
	int insert2(AttrDto dto);
	int update(AttrDto dto);
	int update2(AttrDto dto);
	int delete(int contentId);
	int delete2(int contentId);
}
