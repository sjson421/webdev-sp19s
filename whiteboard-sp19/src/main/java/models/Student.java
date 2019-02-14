package models;

import java.util.Date;

public class Student extends Person{
	private String major;
	
	public Student(Integer id, String firstName, String lastName, String username, String password, Date dob, String major) {
		super(id, "STUDENT", firstName, lastName, username, password, dob);
		this.major = major;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}
}
