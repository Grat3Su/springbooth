package com.mycom.enjoytrip.board.dto;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

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
	String boardTitle, boardDetail, userName, userId;
	LocalDateTime boardTime;
	
	// 시간: mybatis는 date 타입만 가능한데 LocalDateTime을 받아주어야 하기 때문에 수동작업으로 바꿔줌
	public void setBoardTime(Date boardTime) {
		this.boardTime = LocalDateTime.ofInstant(boardTime.toInstant(), ZoneId.systemDefault()); // 이렇게 타입을 바꿔줘야한다
	}
}
