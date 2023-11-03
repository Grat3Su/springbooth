package com.mycom.enjoytrip.attr.service;

import java.util.List;

import com.mycom.enjoytrip.attr.dto.AttrDto;

public interface AttrService {
	List<AttrDto>list(int pageIdx);
	AttrDto detail(int contentId);
	int insert(AttrDto dto);
	int update(AttrDto dto);
	int delete(int contentId);
}
