package com.mycom.enjoytrip.users.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mycom.enjoytrip.board.dto.BoardDto;
import com.mycom.enjoytrip.users.dto.UsersDto;

@Mapper
public interface UsersDao {
	List<UsersDto> usersList();
	UsersDto usersDetail(int userId);
	int usersInsert(UsersDto dto);
	int usersUpdate(UsersDto dto);
	int usersDelete(int userId);
}
