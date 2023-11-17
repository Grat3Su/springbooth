package com.mycom.myboard.common;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.mycom.myboard.user.dto.UserDto;

// 클라이언트에 대한 응답 성공/ 실패를 json 문자열로 내려줌 
// "result" : "success"
// "result" : "fail"

// "result" : "login" <- 으로 보내면 => login page로 보내도록 하자 (front)

@Component
public class LoginInterceptor implements HandlerInterceptor {

    private final String jsonStr = "{\"result\" : \"login\"}";

    // dispatcher servlet을 통과하는 애들은 controller 가기 전 무조건 prehandle를 무조건 거침
    // 이때 설정을 통해 거치는 애들, 안거치는 애들을 설정할 수 있음
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        // exclude 요청에는 아래 출력 X
        System.out.println("LoginInterceptor >>>> " + request.getRequestURI());
        System.out.println(handler);
        
        // CORS 에서  put, delete 등 오류 해결 코드
        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }
        
        HttpSession session = request.getSession();
        UserDto userDto = (UserDto) session.getAttribute("userDto");

        if( userDto == null ) {
            response.getWriter().write(jsonStr);            
            return false;
        }

        return true;
    }

}