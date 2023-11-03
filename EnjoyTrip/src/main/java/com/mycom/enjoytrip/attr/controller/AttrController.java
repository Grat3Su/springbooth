package com.mycom.enjoytrip.attr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.enjoytrip.attr.dto.AttrDto;
import com.mycom.enjoytrip.attr.service.AttrService;

@RestController
//@CrossOrigin(origins="*", allowedHeaders = "*")
public class AttrController {
	@Autowired
	private AttrService service;
	
	@GetMapping(value="attrs/list/{pageIdx}")
	public List<AttrDto> list(@PathVariable int pageIdx){
		List<AttrDto> list = service.list(pageIdx);
		System.out.println(list);
		return list;
	}
	
	@GetMapping(value="/attrs/{contentId}")
	public AttrDto detail(@PathVariable int contentId){
		AttrDto dto = service.detail(contentId);
		return dto;
	}
	
	@PostMapping(value="/attrs")
	public int insert(AttrDto dto){
		return service.insert(dto);
	}
	
	@PutMapping(value="/attrs/{contentId}")
	public int update(AttrDto dto){
		return service.update(dto);
	}
	
	@DeleteMapping(value="/attrs/{contentId}")
	public int delete(@PathVariable int contentId){
		return service.delete(contentId);
	}
}
