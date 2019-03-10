package edu.northeastern.cs5610.models;

import javax.persistence.Entity;

@Entity
public class LinkWidget extends Widget {
	private String title;
	private String href;

	public LinkWidget(String name, Topic topic, String title, String href) {
		super("LINK", name, topic);
		this.title = title;
		this.href = href;
	}
	public LinkWidget() {
	}
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getHref() {
		return href;
	}

	public void setHref(String href) {
		this.href = href;
	}
}
