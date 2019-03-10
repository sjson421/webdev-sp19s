package edu.northeastern.cs5610.models;

import javax.persistence.Entity;

@Entity
public class ImageWidget extends Widget {
	private String src;

	public ImageWidget(String name, Topic topic, String src) {
		super("IMAGE", name, topic);
		this.src = src;
	}

	public ImageWidget() {
	}
	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}
}
