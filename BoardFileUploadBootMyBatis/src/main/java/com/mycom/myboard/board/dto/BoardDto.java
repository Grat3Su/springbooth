package com.mycom.myboard.board.dto;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
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
public class BoardDto {
	int boardId;
	int userSeq;
	String userName;
	String userProfileImgUrl;
	String title;
	String content;
	LocalDateTime regDt;//java 8
	int readCout;
	boolean sameUser;
	
	//첨부 파일들
	List<BoardFileDto>fileList;
	
	//regDt setter
	//java8 에서만 존재하기 때문에 롬복이 만들어준 것은 오류날 수 있다.
	//lombok + mybatis mapping 충돌 방지
	public void setRegDt(Date regDt) {
		this.regDt = LocalDateTime.ofInstant(regDt.toInstant(), ZoneId.systemDefault());
	}
}
