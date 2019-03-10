package edu.northeastern.cs5610.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Topic {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String title;
	@OneToMany(mappedBy = "topic")
	private List<Widget> widgets;
	@ManyToOne()
	@JsonIgnore
	private Lesson lesson;

	public Topic(String title, List<Widget> widgets, Lesson lesson) {
		this.title = title;
		this.widgets = widgets;
		this.lesson = lesson;
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

	public Lesson getLesson() {
		return lesson;
	}

	public void setLesson(Lesson lesson) {
		this.lesson = lesson;
	}
}
