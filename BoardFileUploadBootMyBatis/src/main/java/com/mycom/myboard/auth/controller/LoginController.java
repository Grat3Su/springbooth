package com.mycom.myboard.auth.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.myboard.auth.service.LoginService;
import com.mycom.myboard.user.dto.UserDto;

//json result : success
//json result : fail
@RestController
public class LoginController {
	@Autowired
	LoginService loginService;
	
	@PostMapping(value="/login")
	public Map<String, String> login(@RequestBody UserDto dto, HttpSession session){
		UserDto userDto = loginService.login(dto);
		Map<String, String> map = new HashMap<>();
		
		//성공
		if(userDto != null) {
			session.setAttribute("userDto", userDto);//서버용도
			
			//클라이언트
			map.put("result", "success");
			map.put("userName", userDto.getUserName());
			map.put("userProfileImageUrl", userDto.getUserProfileImageUrl());			
		}else {
			map.put("result", "fail");
		}
		return map;
	}

	@GetMapping(value="/logout")
	public Map<String, String> logout(HttpSession session){
		session.invalidate();
		Map<String, String> map = new HashMap<>();
		map.put("result", "success");
		return map;
	}
}
