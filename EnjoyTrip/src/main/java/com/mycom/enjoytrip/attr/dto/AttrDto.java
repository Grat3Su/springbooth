package com.mycom.enjoytrip.attr.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AttrDto {
	int contentId;//, pageIdx;
	String title, addr1, addr2, firstImage, overview;
	
	//ds.content_id, info.title, info.addr1, info.addr2, info.first_image, ds.overview
}
