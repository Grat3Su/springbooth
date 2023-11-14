package com.mycom.myboard.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.myboard.user.dto.UserDto;
import com.mycom.myboard.user.dto.UserResultDto;
import com.mycom.myboard.user.service.UserService;

@RestController
public class UserController {
	@Autowired
	UserService userService;
	
	static final int SUCCESS = 1;
	static final int FAIL = -1;
	
	@PostMapping(value="/users")
	public UserResultDto register(@RequestBody UserDto userDto) {//클라이언트가 json 을 보내면 @RequestBody 붙여야함.
		UserResultDto userResultDto = userService.userRegister(userDto);
		return userResultDto;
	}
}
