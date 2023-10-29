package com.mycom.elec.dto;

public class ElecDto {
	String elecCode, model, type, company;
	int price;
	@Override
	public String toString() {
		return "ElecDto [elecCode=" + elecCode + ", model=" + model + ", type=" + type + ", company=" + company
				+ ", price=" + price + "]";
	}
	public ElecDto() {
		super();
	}
	public String getElecCode() {
		return elecCode;
	}
	public void setElecCode(String elecCode) {
		this.elecCode = elecCode;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public ElecDto(String elecCode, String model, String type, String company, int price) {
		super();
		this.elecCode = elecCode;
		this.model = model;
		this.type = type;
		this.company = company;
		this.price = price;
	}
}
