package services;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import models.Course;
import models.Lesson;
import models.Module;
import models.Topic;

@RestController
public class TopicService {
	List<Course> courses = CourseService.courses;

	@PostMapping("/api/lesson/{lid}/topic")
	public Topic createTopic(@PathVariable("lid") Integer id, @RequestBody Topic topic) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				List<Lesson> lessons = module.getLessons();
				for (int k = 0; k < lessons.size(); k++) {
					Lesson lesson = lessons.get(k);
					if (lesson.getId().equals(id)) {
						lesson.getTopics().add(topic);
						return topic;
					}
				}
			}
		}
		return null;
	}

	@GetMapping("/api/lesson/{lid}/topic")
	public List<Topic> findAllTopics(@PathVariable("lid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				List<Lesson> lessons = module.getLessons();
				for (int k = 0; k < lessons.size(); k++) {
					Lesson lesson = lessons.get(k);
					if (lesson.getId().equals(id)) {
						return lesson.getTopics();
					}
				}
			}
		}
		return null;
	}

	@GetMapping("/api/topic/{tid}")
	public Topic findTopicById(@PathVariable("tid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				List<Lesson> lessons = module.getLessons();
				for (int k = 0; k < lessons.size(); k++) {
					Lesson lesson = lessons.get(k);
					List<Topic> topics = lesson.getTopics();
					for (int l = 0; l < topics.size(); l++) {
						Topic topic = topics.get(l);
						if (topic.getId().equals(id)) {
							return topic;
						}
					}
				}
			}
		}
		return null;
	}

	@PutMapping("/api/topic/{tid}")
	public Topic updateTopic(@PathVariable("tid") Integer id, @RequestBody Lesson newLesson) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				List<Lesson> lessons = module.getLessons();
				for (int k = 0; k < lessons.size(); k++) {
					Lesson lesson = lessons.get(k);
					List<Topic> topics = lesson.getTopics();
					for (int l = 0; l < topics.size(); l++) {
						Topic topic = topics.get(l);
						if (topic.getId().equals(id)) {
							topics.set(l, topic);
							return topic;
						}
					}
				}
			}
		}
		return null;
	}

	@DeleteMapping("/api/topic/{tid}")
	public void deleteTopic(@PathVariable("tid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				List<Lesson> lessons = module.getLessons();
				for (int k = 0; k < lessons.size(); k++) {
					Lesson lesson = lessons.get(k);
					List<Topic> topics = lesson.getTopics();
					for (int l = 0; l < topics.size(); l++) {
						Topic topic = topics.get(l);
						if (topic.getId().equals(id)) {
							topics.remove(l);
						}
					}
				}
			}
		}
	}
}
