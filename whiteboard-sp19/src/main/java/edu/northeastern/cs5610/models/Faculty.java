package edu.northeastern.cs5610.models;

import javax.persistence.Entity;

@Entity
public class Faculty extends Person{
	private String department;
	
	public Faculty(String firstName, String lastName, String username, 
			String password, String dob, String phone, String email, String department) {
		super("FACULTY", firstName, lastName, username, password, dob, phone, email);
		this.department = department;
	}
	public Faculty() {}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}
}
