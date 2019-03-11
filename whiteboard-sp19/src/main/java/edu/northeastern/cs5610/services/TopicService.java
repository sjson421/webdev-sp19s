package edu.northeastern.cs5610.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5610.models.Course;
import edu.northeastern.cs5610.models.Lesson;
import edu.northeastern.cs5610.models.Module;
import edu.northeastern.cs5610.models.Topic;
import edu.northeastern.cs5610.models.Widget;
import edu.northeastern.cs5610.repositories.LessonRepository;
import edu.northeastern.cs5610.repositories.TopicRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class TopicService {
	@Autowired
	TopicRepository rep;
	@Autowired
	LessonRepository cRep;

	@PostMapping("/api/lesson/{lid}/topic")
	public List<Topic> createTopic(@PathVariable("lid") Integer id, @RequestBody Topic topic) {
		List<Lesson> courses = (List<Lesson>) cRep.findAll();
		for (int i = 0; i < courses.size(); i++) {
			Lesson w = courses.get(i);
			if (w.getId().equals(id)) {
				topic.setLesson(w);
				break;
			}
		}
		rep.save(topic);
		return (List<Topic>) rep.findAll();
	}

	@GetMapping("/api/lesson/{lid}/topic")
	public List<Topic> findAllTopics(@PathVariable("lid") Integer id) {
		List<Topic> returned = new ArrayList<Topic>();
		List<Topic> topics = (List<Topic>) rep.findAll();
		
		for (int i = 0; i < topics.size(); i++) {
			Topic w = topics.get(i);
			if (w.getLesson().getId().equals(id)) {
				returned.add(w);
			}
		}
		return returned;
	}

	@GetMapping("/api/topic/{tid}")
	public Topic findTopicById(@PathVariable("tid") Integer id) {
		return rep.findById(id).get();
	}

	@PutMapping("/api/topic/{tid}")
	public Topic updateTopic(@PathVariable("tid") Integer id, @RequestBody Topic newTopic) {
		Topic c = rep.findById(id).get();
		c.setTitle(newTopic.getTitle());
		return rep.save(c);
	}

	@DeleteMapping("/api/topic/{tid}")
	public List<Topic> deleteTopic(@PathVariable("tid") Integer id) {
		rep.deleteById(id);
		return (List<Topic>) rep.findAll();
	}

	@PostMapping("/api/topic/{tid}/widget")
	public Widget createWidget(@PathVariable("tid") Integer id, @RequestBody Widget widget) {
		Topic topic = findTopicById(id);
		return topic.createWidgetOnTopic(widget);
	}

	@GetMapping("/api/topic/{tid}/widget")
	public List<Widget> findAllWidgets(@PathVariable("tid") Integer id) {
		Topic topic = findTopicById(id);
		return topic.getWidgets();
	}
}
