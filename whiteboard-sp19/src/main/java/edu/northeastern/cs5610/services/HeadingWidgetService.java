package edu.northeastern.cs5610.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5610.models.HeadingWidget;
import edu.northeastern.cs5610.models.Lesson;
import edu.northeastern.cs5610.models.LinkWidget;
import edu.northeastern.cs5610.models.Module;
import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.models.Topic;
import edu.northeastern.cs5610.repositories.HeadingWidgetRepository;
import edu.northeastern.cs5610.repositories.TopicRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class HeadingWidgetService {
	@Autowired
	HeadingWidgetRepository widgetRep;
	@Autowired
	TopicRepository topicRep;
	
	@PostMapping("/api/topic/{tid}/heading/widget")
	public HeadingWidget createWidget(@PathVariable("tid") Integer id, @RequestBody HeadingWidget widget) {
		List<Topic> topics =(List<Topic>) topicRep.findAll();
		
		for (int i = 0; i < topics.size(); i++) {
			Topic topic = topics.get(i);
			if (topic.getId().equals(id)) {
				widget.setTopic(topic);
				break;
			}
		}
		widget.setType("HEADING");
		widgetRep.save(widget);
		return widget;
	}
	@GetMapping("/api/heading/widget/{wid}")
	public HeadingWidget findHeadingWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}
	@GetMapping("/api/heading/widget")
	public List<HeadingWidget> findAllWidgets() {
		return (List<HeadingWidget>) widgetRep.findAll();
	}
	@PutMapping("/api/heading/widget/{wid}")
	public HeadingWidget updateHeadingWidget(@PathVariable("wid") Integer id, @RequestBody HeadingWidget widget) {
		HeadingWidget w = widgetRep.findById(id).get();
		w = widget;
		return widgetRep.save(w);
	}
	@DeleteMapping("/api/heading/widget/{wid}")
	public void deleteHeadingWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}