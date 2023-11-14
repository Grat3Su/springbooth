package com.mycom.myboard.board.dto;

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
public class BoardParamDto {
	int limit;
	int offset;
	String searchWord;
	
	int boardId;
	int userSeq;
}
