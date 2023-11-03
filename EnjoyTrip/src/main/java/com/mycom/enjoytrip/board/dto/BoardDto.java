package com.mycom.enjoytrip.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {
	int boardId;
	String boardTitle, boardDetail, userName, userId, boardTime, boardCategory;
	
}
