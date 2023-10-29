package com.mycom.basic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UrlMappingController {

	@RequestMapping(value="/hello")
	public String m0() {
		System.out.println("/hello");
		return "/hello";
	}

	
	// 여러개의 url이 하나의 메소드로 모이는 것은 가능
	@RequestMapping(value= {"/hello1","/hello2","/hello3"})
	public void m0_2() {
		System.out.println("/hello123");
	}
	
	
	@RequestMapping(value= "/hello/ssafy")
	public void m1() {
		System.out.println("/hello/ssafy");
	}

	@RequestMapping(value= "/method", method=RequestMethod.GET)
	public void m2() {
		System.out.println("/method get");
	}

	@RequestMapping(value= "/method", method=RequestMethod.POST)
	public void m3() {
		System.out.println("/method post");
	}

	
	// put + http: ........./myapp/method/123 <- 123이 수정 대상의 키 값
	@RequestMapping(value= "/method/{num}", method=RequestMethod.PUT)
	public void m4(@PathVariable int num) { // @pathvariable: url의 일부를 변수로 쓸 수 있도록 하는 기능
		System.out.println("/method put num: "+num);
	}
	
	// put + http: ........./myapp/method/123/and/hello <- 123이 수정 대상의 키 값
	@RequestMapping(value= "/method/{num}/and/{str}", method=RequestMethod.PUT)
	public void m5(@PathVariable int num, @PathVariable String str) { // @pathvariable: url의 일부를 변수로 쓸 수 있도록 하는 기능
		System.out.println("/method put num: "+num);
		System.out.println("/method put str: "+str);
	}
	
	
	@GetMapping(value= "/getmapping")
	public void m6() {
		System.out.println("/getmapping");
	}
	
	@PostMapping(value= "/postmapping")
	public void m7() {
		System.out.println("/postmapping");
	}
	
	// /*: 바로 하위 포함된 것까지만 가능 -> /subtest/abc 가능
	@RequestMapping(value="/subtest/*")
	public void m8() {
		System.out.println("/subtest/*");
	}
	
	
	// /**: 하위의 하위의 하위도 가능 -> /subtest/abc/def/hgi 가능
	@RequestMapping(value="/subtest/**")
	public void m9() {
		System.out.println("/subtest/**");
	}
}
