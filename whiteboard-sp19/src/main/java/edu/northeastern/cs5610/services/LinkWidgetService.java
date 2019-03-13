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
import edu.northeastern.cs5610.models.LinkWidget;
import edu.northeastern.cs5610.models.ListWidget;
import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.models.Topic;
import edu.northeastern.cs5610.models.Widget;
import edu.northeastern.cs5610.repositories.LinkWidgetRepository;
import edu.northeastern.cs5610.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class LinkWidgetService {
	@Autowired
	LinkWidgetRepository widgetRep;
	@Autowired
	WidgetRepository rep;

	@GetMapping("/api/link/widget/{wid}")
	public LinkWidget findWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}
	@GetMapping("/api/link/widget")
	public List<LinkWidget> findAllWidgets() {
		return (List<LinkWidget>) widgetRep.findAll();
	}
	@PutMapping("/api/link/widget/{wid}")
	public int updateWidget(@PathVariable("wid") Integer id, @RequestBody LinkWidget widget) {
		Widget w = rep.findById(id).get();
		Topic topic = w.getTopic();
		LinkWidget newWidget = new LinkWidget(widget.getName(), topic, widget.getTitle(), widget.getHref());
		rep.deleteById(id);
		widgetRep.save(newWidget);
		return topic.getId();
	}

	@DeleteMapping("/api/link/widget/{wid}")
	public void deleteWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}