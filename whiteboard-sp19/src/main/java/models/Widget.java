package models;

public class Widget {
	private Integer id;
	private Topic topic;
	private String title;
	private String type;
	private String size;
	private String text;
	private String listType;
	private String items;
	private String src;
	private String href;
	private String preview;

	public Widget(Integer id, Topic topic, String title, String type, String size, String text, 
			String listType, String items, String src, String href) {
		this.id = id;
		this.topic = topic;
		this.title = title;
		this.type = type;
		this.size = size;
		this.text = text;
		this.listType = listType;
		this.items = items;
		this.src = src;
		this.href = href;
		preview = "{\"display\" : \"none\"}";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
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

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}

	public String getHref() {
		return href;
	}

	public void setHref(String href) {
		this.href = href;
	}

	public String getPreview() {
		return preview;
	}

	public void setPreview(String preview) {
		this.preview = preview;
	}
}
