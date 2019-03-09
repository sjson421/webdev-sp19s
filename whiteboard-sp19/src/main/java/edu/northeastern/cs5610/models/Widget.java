package edu.northeastern.cs5610.models;

import javax.persistence.*;

@Entity
public class Widget {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String type;
	private String name;
	private String preview;

	public Widget(Integer id, String type, String name) {
		this.id = id;
		this.type = type;
		this.name = name;
		this.preview = "{\"display\" : \"none\"}";
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
}
