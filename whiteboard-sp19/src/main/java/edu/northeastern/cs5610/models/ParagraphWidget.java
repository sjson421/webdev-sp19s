package edu.northeastern.cs5610.models;

import javax.persistence.Entity;

@Entity
public class ParagraphWidget extends Widget {
	private String text;

	public ParagraphWidget(String name, Topic topic, String text) {
		super("PARAGRAPH", name, topic);
		this.text = text;
	}
	public ParagraphWidget() {
	}
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
}
