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
	
	//이메일로 유저가 있는지 확인하기
	@Override
	public UsersDto findUsers(String userEmail) {
		// TODO Auto-generated method stub
		return dao.findUsers(userEmail);
	}

	@Override
	public int usersInsert(UsersDto dto) {
		UsersDto user = dao.findUsers(dto.getEmail());
		
		if(user!=null) {
			return -1;
		}
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
	
	@Override
	public UsersDto login(UsersDto dto) {
		System.out.println(dto);
		UsersDto userDto = dao.login(dto.getEmail());
		System.out.println(userDto);
		if(userDto!=null && userDto.getPassword().equals(dto.getPassword())) {
			userDto.setPassword(null);
			return userDto;
		}
		return null;
	}

}
