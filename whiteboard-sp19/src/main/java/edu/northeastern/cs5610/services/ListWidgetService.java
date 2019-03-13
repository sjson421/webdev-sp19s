package edu.northeastern.cs5610.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5610.models.HeadingWidget;
import edu.northeastern.cs5610.models.ListWidget;
import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.models.Topic;
import edu.northeastern.cs5610.models.Widget;
import edu.northeastern.cs5610.repositories.ListWidgetRepository;
import edu.northeastern.cs5610.repositories.WidgetRepository;


@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class ListWidgetService {
	@Autowired
	ListWidgetRepository widgetRep;
	@Autowired
	WidgetRepository rep;
	
	@GetMapping("/api/list/widget/{wid}")
	public ListWidget findWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}
	@GetMapping("/api/list/widget")
	public List<ListWidget> findAllWidgets() {
		return (List<ListWidget>) widgetRep.findAll();
	}
	@PutMapping("/api/list/widget/{wid}")
	public int updateWidget(@PathVariable("wid") Integer id, @RequestBody ListWidget widget) {
		Widget w = rep.findById(id).get();
		Topic topic = w.getTopic();
		ListWidget newWidget = new ListWidget(widget.getName(), topic, widget.getListType(), widget.getItems());
		rep.deleteById(id);
		widgetRep.save(newWidget);
		return topic.getId();
	}
	@DeleteMapping("/api/list/widget/{wid}")
	public void deleteWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}