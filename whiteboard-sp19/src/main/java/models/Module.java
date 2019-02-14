package models;

public class Module {
	private Integer id;
	private Course course;
	private String title;
	
	public Module(Integer id, Course course, String title) {
		this.id = id;
		this.course = course;
		this.title = title;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
}
