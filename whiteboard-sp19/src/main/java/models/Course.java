package models;

import java.util.Date;

public class Course {
	private Integer id;
	private String title;
	private Date lastModified;
	
	public Course(Integer id, String title, String owner, Date lastModified) {
		this.id = id;
		this.title = title;
		this.lastModified = lastModified;
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
}
