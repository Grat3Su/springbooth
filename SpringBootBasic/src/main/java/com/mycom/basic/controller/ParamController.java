package com.mycom.basic.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.basic.dto.CarDto;

@RestController
public class ParamController {
	
	@GetMapping("/param1")
	public Map<String,String> m1(HttpServletRequest request) {
		// 직접 request객체 사용 
		String seq = request.getParameter("seq");
		System.out.println(seq);
		Map<String, String>map = new HashMap<>();
		map.put("Result", "success");
		return map;
	}
	
	@PostMapping(value = "/car")
	public Map<String, String>m2(CarDto	dto){
		System.out.println(dto);
		Map<String, String>map = new HashMap<>();
		map.put("Result", "success");
		return map;
	}

	@GetMapping(value = "/car2")
	public Map<String, String>m3(CarDto	dto, HttpSession session){
		System.out.println("insert sucess");
		session.setAttribute("Car", dto);		
		
		Map<String, String>map = new HashMap<>();
		map.put("Result", "success");
		return map;
	}
	
	@GetMapping(value = "/car3")
	public CarDto m4(HttpSession session){
		System.out.println("carDetail");
		
		CarDto dto = (CarDto) session.getAttribute("Car");		
		
		return dto;
	}
	
}
