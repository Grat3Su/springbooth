package com.mycom.mydb.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.mycom.mydb.dto.EmpDto;
import com.mycom.mydb.service.EmpService;
@RestController
public class EmpController {

	private final EmpService service;
	
	public EmpController(EmpService service) {
		this.service = service;
	}
	
	
	
//	//사원 관리
//	@GetMapping(value="/empMain")
//	public String empMain(){//jsp 구성으로
//		return "empMain";
//	}
	
	//사원상세
	//데이터를 내려주겠다
	@GetMapping(value="/empDetail/{employeeId}")//jsp로 안가겠다
	public EmpDto empDetail(@PathVariable int employeeId) {
		System.out.println(employeeId);
		EmpDto empdto = service.empDetail(employeeId);
		System.out.println(empdto);
		return empdto;
	}
	
	
	//사원목록
	@GetMapping(value="/empList")
	public List<EmpDto> empList() {
		List<EmpDto> list = service.empList();
		
		return list;
	}

	//사원 등록
	@PostMapping(value="/empInsert")
	public  Map<String, String> empInsert(EmpDto empDto) {
		int ret = service.empInsert(empDto);
		 Map<String, String> map = new HashMap<>();
		 if (ret == 1) {
			 map.put("result", "success");
		 }else {
			 map.put("result", "fail");
		 }
		return map;
	}
	
	//사원 수정
	@PostMapping(value="/empUpdate")
	public Map<String, String> empUpdate( EmpDto empDto) {
		int ret = service.empUpdate(empDto);
		 Map<String, String> map = new HashMap<>();
		 if (ret == 1) {
			 map.put("result", "success");
		 }else {
			 map.put("result", "fail");
		 }
		return map;
	}
	
	//사원 삭제
	@GetMapping(value="/empDelete/{employeeId}")
	public Map<String, String> empDelete(@PathVariable int employeeId) {
		int ret = service.empDelete(employeeId);
		 Map<String, String> map = new HashMap<>();
		 if (ret == 1) {
			 map.put("result", "success");
		 }else {
			 map.put("result", "fail");
		 }
		return map;
	}
	
	 // 사원 넣기
    @PostMapping(value = "/empInsertJSON")
    public Map<String, String> empInsertJSON(@RequestBody EmpDto dto) {
        int ret = service.empInsert(dto);
        Map<String, String> map = new HashMap<>();

        if (ret == 1) {
            map.put("result", "success");

        } else {
            map.put("result", "fail");

        }
        return map;
    }

}
