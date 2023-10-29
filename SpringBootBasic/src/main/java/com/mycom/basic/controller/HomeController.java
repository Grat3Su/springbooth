package com.mycom.basic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController//@Controller
@Controller
public class HomeController {
//	@RequestMapping("/")
//	public String home() {
//		return "/home";//<- 하나만 있을 때는 ㄱㅊ은데 여러개면 / 넣어줘야 한다.
//	}
	
	@RequestMapping("/home")
	public String home() {
		return "/home";
	} 
}
