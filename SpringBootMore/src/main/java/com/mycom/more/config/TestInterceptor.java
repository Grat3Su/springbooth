package com.mycom.more.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class TestInterceptor implements HandlerInterceptor{
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)throws Exception{
		System.out.println("TestInterceptor >>> "+ request.getRequestURI());

		// #1 무조건 통과
//		return true;

		// #1 선택적 통과 <= 로그인 했다면 통과 아니면 통과 X <= 로그인 체크? 세션에서 로그인이라는 이름으로 success가 있다면 통과 -> "login":"success"
		//로그인 x "/login" 페이지 이동
		HttpSession session = request.getSession();
		String login = (String)session.getAttribute("login");
		if("success".equals(login))return true;//로그인 성공했으므로
		
		response.sendRedirect(request.getContextPath()+"/login");
		return false;
	}
}
