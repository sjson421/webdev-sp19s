package edu.northeastern.cs5610.models;

import java.util.List;

import javax.persistence.OneToMany;

public class Topic {
	private Integer id;
	private String title;
	@OneToMany(mappedBy = "topic")
	private List<Widget> widgets;

	public Topic(Integer id, String title, List<Widget> widgets) {
		this.id = id;
		this.title = title;
		this.widgets = widgets;
	}

	public Topic() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Widget> getWidgets() {
		return widgets;
	}

	public void setWidgets(List<Widget> widgets) {
		this.widgets = widgets;
	}

	public Widget createWidgetOnTopic(Widget widget) {
		this.widgets.add(widget);
		if (widget.getTopic() != this) {
			widget.setTopic(this);
		}
		return widget;
	}
}
