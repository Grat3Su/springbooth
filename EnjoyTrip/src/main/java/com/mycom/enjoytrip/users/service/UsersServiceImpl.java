package com.mycom.enjoytrip.users.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycom.enjoytrip.users.dao.UsersDao;
import com.mycom.enjoytrip.users.dto.UsersDto;
@Service
public class UsersServiceImpl implements UsersService{
	
	@Autowired
	private UsersDao dao;

	@Override
	public List<UsersDto> usersList() {
		// TODO Auto-generated method stub
		return dao.usersList();
	}

	@Override
	public UsersDto usersDetail(int userId) {
		// TODO Auto-generated method stub
		return dao.usersDetail(userId);
		}

	@Override
	public int usersInsert(UsersDto dto) {
		// TODO Auto-generated method stub
		return dao.usersInsert(dto);
	}

	@Override
	public int usersUpdate(UsersDto dto) {
		// TODO Auto-generated method stub
		return dao.usersUpdate(dto);
	}

	@Override
	public int usersDelete(int userId) {
		// TODO Auto-generated method stub
		return dao.usersDelete(userId);
	}

}
