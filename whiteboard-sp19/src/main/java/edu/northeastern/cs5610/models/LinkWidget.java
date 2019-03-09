package edu.northeastern.cs5610.models;

public class LinkWidget extends Widget {
	private String title;
	private String href;

	public LinkWidget(Integer id, String type, String name, String preview, String title, String href) {
		super(id, type, name);
		this.title = title;
		this.href = href;
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
