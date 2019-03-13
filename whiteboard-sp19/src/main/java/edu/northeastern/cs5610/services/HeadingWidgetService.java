package edu.northeastern.cs5610.services;

import java.util.List;
import java.util.Optional;

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
import edu.northeastern.cs5610.models.Widget;
import edu.northeastern.cs5610.repositories.HeadingWidgetRepository;
import edu.northeastern.cs5610.repositories.TopicRepository;
import edu.northeastern.cs5610.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class HeadingWidgetService {
	@Autowired
	HeadingWidgetRepository widgetRep;
	@Autowired
	TopicRepository topicRep;
	@Autowired
	WidgetRepository rep;

	@PostMapping("/api/topic/{tid}/heading/widget")
	public int createWidget(@PathVariable("tid") Integer tid, @RequestBody HeadingWidget widget) {
		int id = TopicService.topicId;
		List<Topic> topics = (List<Topic>) topicRep.findAll();

		for (int i = 0; i < topics.size(); i++) {
			Topic topic = topics.get(i);
			if (topic.getId().equals(id)) {
				widget.setTopic(topic);
				break;
			}
		}
		widget.setType("HEADING");
		widgetRep.save(widget);
		return id;
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
	public int updateHeadingWidget(@PathVariable("wid") Integer id, @RequestBody HeadingWidget widget) {
		Widget w = rep.findById(id).get();
		Topic topic = w.getTopic();
		HeadingWidget newWidget = new HeadingWidget(widget.getName(), topic, widget.getSize(), widget.getText());
		rep.deleteById(id);
		widgetRep.save(newWidget);
		return topic.getId();
	}

	@DeleteMapping("/api/heading/widget/{wid}")
	public void deleteHeadingWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}