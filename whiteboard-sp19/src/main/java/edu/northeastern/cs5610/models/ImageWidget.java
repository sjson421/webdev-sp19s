package edu.northeastern.cs5610.models;

public class ImageWidget extends Widget {
	private String src;

	public ImageWidget(Integer id, String type, String name, String preview, String src) {
		super(id, type, name);
		this.src = src;
	}

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}
}
