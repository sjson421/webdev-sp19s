package edu.northeastern.cs5610.models;

import java.util.Date;

public class Faculty extends Person{
	private String department;
	
	public Faculty(Integer id, String firstName, String lastName, String username, String password, Date dob, String department) {
		super(id, "FACULTY", firstName, lastName, username, password, dob);
		this.department = department;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}
}
