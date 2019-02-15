package edu.northeastern.cs5610.models;

import java.util.Date;

public class Student extends Person{
	private String major;
	
	public Student(Integer id, String firstName, String lastName, String username, 
			String password, Date dob, String major, String phone, String email) {
		super(id, "STUDENT", firstName, lastName, username, password, dob, phone, email);
		this.major = major;
	}

	public Student() {}
	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}
}
