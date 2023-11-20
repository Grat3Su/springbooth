package com.mycom.enjoytrip.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mycom.enjoytrip.board.dto.BoardDto;
import com.mycom.enjoytrip.board.service.BoardService;

@RestController
public class BoardController {
	@Autowired
	private BoardService service;
	
	@GetMapping(value="boards")
	public List<BoardDto> list(){
		List<BoardDto> list = service.list();
		return list;
	}
	
	@GetMapping(value="/boards/{bindex}")
	public BoardDto detail(@PathVariable int bindex){
		BoardDto dto = service.detail(bindex);
		return dto;
	}
	
	@PostMapping(value="/boards")
	public int insert(@RequestBody BoardDto dto){
		return service.insert(dto);
	}
	
	@PutMapping(value="/boards/{bindex}")
	public int update(@PathVariable int bindex, @RequestBody BoardDto dto){
		System.out.println("update");
		dto.setBoardId(bindex);
		return service.update(dto);
	}
	
	@DeleteMapping(value="/boards/{bindex}")
	public int delete(@PathVariable int bindex){
		return service.delete(bindex);
	}
}
