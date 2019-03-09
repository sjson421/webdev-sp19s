package edu.northeastern.cs5610.models;

public class ListWidget extends Widget {
	private String listType;
	private String items;

	public ListWidget(Integer id, String type, String name, String preview, String listType,
			String items) {
		super(id, type, name);
		this.listType = listType;
		this.items = items;
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
