package com.mycom.more.service;

import java.beans.Transient;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mycom.more.dao.StudentDao;
import com.mycom.more.dto.StudentDto;

@Service
public class StudentServiceImpl implements StudentService{
	@Autowired
	StudentDao studentDao;
	@Override
	public List<StudentDto> list() {
		// TODO Auto-generated method stub
		return studentDao.list();
	}

	@Override
	public StudentDto detail(int studentId) {
		// TODO Auto-generated method stub
		return studentDao.detail(studentId);
	}

	@Override
	@Transactional//서비스에만 쓸 수 있다.
	//런타임 익셉션만 방지해줌
	public int insert(StudentDto dto) {
		studentDao.insert(dto);
		//이 아래 에러 코드는 동작하지 않는다. 그랙서 트랜지션이 없으면 위의 코드만 실행이 되는데 트랜지션이 있으면 함수 실행 전으로 롤백
		String str = null;
		str.length();
		return studentDao.insert(dto);
	}

	@Override
	public int update(StudentDto dto) {
		// TODO Auto-generated method stub
		return studentDao.update(dto);
	}

	@Override
	public int delete(int studentId) {
		// TODO Auto-generated method stub
		return studentDao.delete(studentId);
	}

}
