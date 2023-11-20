package com.mycom.enjoytrip.attr.service;

import java.util.List;

import com.mycom.enjoytrip.attr.dto.AttrDto;
import com.mycom.enjoytrip.attr.dto.LocDto;

public interface AttrService {
	List<AttrDto>list(int pageIdx);

	List<LocDto> sido();
	List<LocDto> gugun(int sidoCode);

	List<AttrDto>sidoList(int sidoCode, int pageIdx);
	List<AttrDto>gugunList(int sidoCode,int gugunCode, int pageIdx);
	AttrDto detail(int contentId);
	int insert(AttrDto dto);
	int update(AttrDto dto);
	int delete(int contentId);
}
