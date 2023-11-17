package com.mycom.enjoytrip.users.service;

import java.util.List;

import com.mycom.enjoytrip.board.dto.BoardDto;
import com.mycom.enjoytrip.users.dto.UsersDto;

public interface UsersService {
	List<UsersDto> usersList();
	UsersDto usersDetail(int userId);
	int usersInsert(UsersDto dto);
	int usersUpdate(UsersDto dto);
	int usersDelete(int userId);
	UsersDto findUsers(String userEmail);
	UsersDto login(UsersDto userDto);
}
