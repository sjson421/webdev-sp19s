package models;

public class Lesson {
	private Integer id;
	private Module module;
	private String title;
	
	public Lesson(Integer id, Module module, String title) {
		this.id = id;
		this.module = module;
		this.title = title;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Module getModule() {
		return module;
	}

	public void setModule(Module module) {
		this.module = module;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}
