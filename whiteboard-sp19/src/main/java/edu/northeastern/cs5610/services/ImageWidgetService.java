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
import edu.northeastern.cs5610.models.ImageWidget;
import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.models.Topic;
import edu.northeastern.cs5610.models.Widget;
import edu.northeastern.cs5610.repositories.ImageWidgetRepository;
import edu.northeastern.cs5610.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class ImageWidgetService {
	@Autowired
	ImageWidgetRepository widgetRep;
	@Autowired
	WidgetRepository rep;
	
	@GetMapping("/api/image/widget/{wid}")
	public ImageWidget findWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}
	@GetMapping("/api/image/widget")
	public List<ImageWidget> findAllWidgets() {
		return (List<ImageWidget>) widgetRep.findAll();
	}
	@PutMapping("/api/image/widget/{wid}")
	public int updateWidget(@PathVariable("wid") Integer id, @RequestBody ImageWidget widget) {
		Widget w = rep.findById(id).get();
		Topic topic = w.getTopic();
		ImageWidget newWidget = new ImageWidget(widget.getName(), topic, widget.getSrc());
		rep.deleteById(id);
		widgetRep.save(newWidget);
		return topic.getId();
	}
	@DeleteMapping("/api/image/widget/{wid}")
	public void deleteWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}