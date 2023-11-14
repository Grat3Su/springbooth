package com.mycom.myboard.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.mycom.myboard.user.dto.UserDto;

//클라이언트에 대한 응답을 성공/실패 <= json 문자열 "result":"login"으로 바로 보냄
@Component
public class LoginInterceptor implements HandlerInterceptor{
	private final String jsonStr="{\"result\":\"login\"}";
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)throws Exception{
		System.out.println("LoginInterceptor >>> "+ request.getRequestURI());
		
		//JSP 없이 비동기 처리만
		HttpSession session = request.getSession();
		UserDto userDto = (UserDto) session.getAttribute("userDto");
		if(userDto ==null) {
			//로구인이 필요하다는 응답
			response.getWriter().write(jsonStr);
			return false;
		}
		
		return true;		
	}
}
