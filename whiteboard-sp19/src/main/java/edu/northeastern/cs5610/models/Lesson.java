package edu.northeastern.cs5610.models;

import java.util.List;

public class Lesson {
	private Integer id;
	private String title;
	private List<Topic> topics;
	
	public Lesson(Integer id, String title, List<Topic> topics) {
		this.id = id;
		this.title = title;
		this.topics = topics;
	}
	public Lesson() {}

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

	public List<Topic> getTopics() {
		return topics;
	}

	public void setTopics(List<Topic> topics) {
		this.topics = topics;
	}
}
