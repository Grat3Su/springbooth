package com.mycom.elec.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.elec.dto.ElecDto;
import com.mycom.elec.service.ElecService;
@RestController
public class ElecController {

	private final ElecService service;
	
	public ElecController(ElecService service) {
		this.service = service;
	}
	
	
	
//	//사원 관리
//	@GetMapping(value="/empMain")
//	public String empMain(){//jsp 구성으로
//		return "empMain";
//	}
	
	//기기 상세
	@GetMapping(value="/elecDetail/{elecCode}")//jsp로 안가겠다
	public ElecDto elecDetail(@PathVariable String elecCode) {
		System.out.println(elecCode);
		ElecDto elecdto = service.elecDetail(elecCode);
		System.out.println(elecdto);
		return elecdto;
	}
	
	
	//기기 목록
	@GetMapping(value="/elecList")
	public List<ElecDto> elecList() {
		List<ElecDto> list = service.elecList();
		
		return list;
	}
	

	//기기 등록
	@PostMapping(value="/elecInsert")
	public  Map<String, String> elecInsert(ElecDto elecdto) {
		int ret = service.elecInsert(elecdto);
		 Map<String, String> map = new HashMap<>();
		 if (ret == 1) {
			 map.put("result", "success");
		 }else {
			 map.put("result", "fail");
		 }
		return map;
	}
	
	
	//사원 삭제
	@GetMapping(value="/elecDelete/{elecCode}")
	public Map<String, String> elecDelete(@PathVariable String elecCode) {
		int ret = service.elecDelete(elecCode);
		 Map<String, String> map = new HashMap<>();
		 if (ret == 1) {
			 map.put("result", "success");
		 }else {
			 map.put("result", "fail");
		 }
		return map;
	}
	
	 // 사원 넣기
//    @PostMapping(value = "/empInsertJSON")
//    public Map<String, String> empInsertJSON(@RequestBody EmpDto dto) {
//        int ret = service.empInsert(dto);
//        Map<String, String> map = new HashMap<>();
//
//        if (ret == 1) {
//            map.put("result", "success");
//
//        } else {
//            map.put("result", "fail");
//
//        }
//        return map;
//    }

}