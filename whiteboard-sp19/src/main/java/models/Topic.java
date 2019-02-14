package models;

public class Topic {
	private Integer id;
	private Lesson lesson;
	private String title;
	
	public Topic(Integer id, Lesson lesson, String title) {
		this.id = id;
		this.lesson = lesson;
		this.title = title;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Lesson getLesson() {
		return lesson;
	}

	public void setLesson(Lesson lesson) {
		this.lesson = lesson;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}
