package com.mycom.enjoytrip.users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.enjoytrip.users.dto.UsersDto;
import com.mycom.enjoytrip.users.service.UsersService;

@RestController
@CrossOrigin(origins="*", allowedHeaders = "*")
public class UsersController {
	@Autowired
	private UsersService service;
	
	@GetMapping(value="users")
	public List<UsersDto> list(){
		List<UsersDto>list = service.usersList();
		return list;
	}
	
	@GetMapping(value="/users/{userId}")
	public UsersDto detail(@PathVariable int userId){
		UsersDto dto = service.usersDetail(userId);
		return dto;
	}
	
	@PostMapping(value="/users")
	public int insert(UsersDto dto){
		return service.usersInsert(dto);
	}
	
	@PutMapping(value="/users/{userId}")
	public int update(@PathVariable int userId, UsersDto dto){
		return service.usersUpdate(dto);
	}
	
	@DeleteMapping(value="/users/{userId}")
	public int delete(@PathVariable int userId){
		return service.usersDelete(userId);
	}
}
