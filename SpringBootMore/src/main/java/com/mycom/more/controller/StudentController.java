package com.mycom.more.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.more.dto.StudentDto;
import com.mycom.more.service.StudentService;

@RestController
//@CrossOrigin(origins="*", allowedHeaders = "*")
public class StudentController {

	@Autowired
	StudentService studentService;
	
	
	@GetMapping(value="/students")
	public List<StudentDto> list(){
		List<StudentDto>list = studentService.list();
		return list;
	}
	
	@GetMapping(value="/students/{studentId}")
	public StudentDto detail(@PathVariable int studentId){
		StudentDto dto = studentService.detail(studentId);
		return dto;
	}
	
	
	@PostMapping(value="/students")
	public int insert(StudentDto dto){
		return studentService.insert(dto);
	}
	
	@PutMapping(value="/students/{studentId}")
	public int update(@PathVariable int studentId, StudentDto dto){
		return studentService.update(dto);
	}
	
	@DeleteMapping(value="/students/{studentId}")
	public int delete(@PathVariable int studentId){
		return studentService.delete(studentId);
	}
}
