package edu.northeastern.cs5610.models;

import javax.persistence.Entity;

@Entity
public class HeadingWidget extends Widget {
	private Integer size;
	private String text;

	public HeadingWidget(String name, Topic topic, Integer size,
			String text) {
		super("HEADING", name, topic);
		this.size = size;
		this.text = text;
	}
	public HeadingWidget() {
	}
	public Integer getSize() {
		return size;
	}

	public void setSize(Integer size) {
		this.size = size;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
}
