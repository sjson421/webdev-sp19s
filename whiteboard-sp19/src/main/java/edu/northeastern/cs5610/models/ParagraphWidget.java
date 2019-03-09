package edu.northeastern.cs5610.models;

public class ParagraphWidget extends Widget {
	private String text;

	public ParagraphWidget(Integer id, String type, String name, String preview, String text) {
		super(id, type, name);
		this.text = text;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
}
