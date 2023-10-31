package com.mycom.more.controller;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//바로 json으로 리턴
//jsp를 사용하지 않음
@RestController//@Controller + @ResponseBody;
public class TestInterceptorController {
	@GetMapping("/login")
	public String m1() {
		System.out.println("/login");
		return "/login";
	}
	
	@GetMapping("/login/ok")//로그인 성공 페이지 요청
	public String m2(HttpSession session) {
		System.out.println("/login/ok");
		session.setAttribute("login", "success");
		return "/logout/ok";
	}
	
	@GetMapping("/logout")//로그아웃 <= 로그인해야 접근 가능
	public String m3(HttpSession session) {
		System.out.println("/logout/ok");
		session.invalidate();
		return "/logout";
	}

	@GetMapping("/users")//마이페이지 <= 로그인해야 접근 가능
	public String m4() {
		System.out.println("users");
		return "/users";
	}
}
