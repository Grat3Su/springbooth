package com.mycom.mydb.dto;

public class StudDto {

	int studId;
	String name, email, phone;
	
	public StudDto(int studId, String name, String email, String phone) {
		super();
		this.studId = studId;
		this.name = name;
		this.email = email;
		this.phone = phone;
	}
	public int getStudId() {
		return studId;
	}
	public void setStudId(int studId) {
		this.studId = studId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Override
	public String toString() {
		return "StudDto [studId=" + studId + ", name=" + name + ", email=" + email + ", phone=" + phone + "]";
	}
	
	
}
