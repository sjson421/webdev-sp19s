package edu.northeastern.cs5610.models;

import javax.persistence.Entity;

@Entity
public class ListWidget extends Widget {
	private String listType;
	private String items;

	public ListWidget(String name, Topic topic, String listType, String items) {
		super("LIST", name, topic);
		this.listType = listType;
		this.items = items;
	}
	public ListWidget() {
	}
	public String getListType() {
		return listType;
	}

	public void setListType(String listType) {
		this.listType = listType;
	}

	public String getItems() {
		return items;
	}

	public void setItems(String items) {
		this.items = items;
	}
}
