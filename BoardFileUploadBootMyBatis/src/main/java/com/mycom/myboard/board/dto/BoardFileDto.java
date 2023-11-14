package com.mycom.myboard.board.dto;

import java.time.LocalDateTime;

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
public class BoardFileDto {
	int fileId;
	int boardId;
	String fileName;
	long fileSize;
	String fileContentType;
	String fileUrl;
	LocalDateTime regDt;
}
