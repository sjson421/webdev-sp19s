package edu.northeastern.cs5610.models;

import java.util.Date;
import java.util.List;

public class Course {
	private Integer id;
	private String title;
	private Date lastModified;
	private List<Module> modules;
	
	public Course(Integer id, String title, String owner, Date lastModified, List<Module> modules) {
		this.id = id;
		this.title = title;
		this.lastModified = lastModified;
		this.modules = modules;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Date getLastModified() {
		return lastModified;
	}
	public void setLastModified(Date lastModified) {
		this.lastModified = lastModified;
	}
	public List<Module> getModules() {
		return modules;
	}
	public void setModules(List<Module> modules) {
		this.modules = modules;
	}
}
