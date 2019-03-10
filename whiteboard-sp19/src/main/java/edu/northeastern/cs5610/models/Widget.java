package edu.northeastern.cs5610.models;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Widget {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String type;
	private String name;
	private String preview = "{\"display\" : \"none\"}";
	@ManyToOne()
	@JsonIgnore
	private Topic topic;

	public Widget(String type, String name, Topic topic) {
		this.type = type;
		this.name = name;
		this.preview = "{\"display\" : \"none\"}";
		this.topic = topic;
	}

	public Widget() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPreview() {
		return preview;
	}

	public void setPreview(String preview) {
		this.preview = preview;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
		if (!topic.getWidgets().contains(this)) {
			topic.getWidgets().add(this);
		}
	}
}
