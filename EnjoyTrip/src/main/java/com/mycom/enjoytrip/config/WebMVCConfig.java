package com.mycom.enjoytrip.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//import com.mycom.myboard.common.LoginInterceptor;


@Configuration
public class WebMVCConfig implements WebMvcConfigurer {//annotation 기반의 config
	//인터셉터 설정
//	@Autowired
//	LoginInterceptor loginInterceptor;
//	
//	@Override
//	public void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(loginInterceptor)
//		.addPathPatterns("/**")
//		.excludePathPatterns(
//				"/",
//				"/login/**",
//				"/users/**",
//				"/codes/**",
//				"/css/**",
//				"/js/**",
//				"/img/**",
//				"/assets/**",
//				"/favico.ico"				
//				);
//		
//	}
	
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                 .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")//put delete는 신뢰할 수 없는 메소드로 지정되어 있어서 허용해놔야 한다. 빼먹으면 CORS오류
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3000);
    }
	
}
