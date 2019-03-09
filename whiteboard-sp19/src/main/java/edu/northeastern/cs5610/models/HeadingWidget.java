package edu.northeastern.cs5610.models;

public class HeadingWidget extends Widget {
	private Integer size;
	private String text;

	public HeadingWidget(Integer id, String type, String name, String preview, Integer size,
			String text) {
		super(id, type, name);
		this.size = size;
		this.text = text;
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
