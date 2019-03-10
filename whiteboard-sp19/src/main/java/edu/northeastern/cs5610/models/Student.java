package edu.northeastern.cs5610.models;

import javax.persistence.Entity;

@Entity
public class Student extends Person{
	private String major;
	
	public Student(String firstName, String lastName, String username, 
			String password, String dob, String phone, String email, String major) {
		super("STUDENT", firstName, lastName, username, password, dob, phone, email);
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
