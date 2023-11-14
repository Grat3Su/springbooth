package com.mycom.myboard.board.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BoardResultDto {
	int result;
	BoardDto dto;//상세 1건
	List<BoardDto>list;//목록 여러건
	int count;//총 건수 
}
