package com.mycom.basic.dto;

public class CarDto {
	int price;
	String name;
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getName() {
		return name;
	}
	@Override
	public String toString() {
		return "CarDto [price=" + price + ", name=" + name + "]";
	}
	public void setName(String name) {
		this.name = name;
	}
}
