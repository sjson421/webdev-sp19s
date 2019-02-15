package edu.northeastern.cs5610.services;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5610.models.Course;
import edu.northeastern.cs5610.models.Lesson;
import edu.northeastern.cs5610.models.Module;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LessonService {
	List<Course> courses = CourseService.courses;

	@PostMapping("/api/module/{mid}/lesson")
	public List<Lesson> createLesson(@PathVariable("mid") Integer id, @RequestBody Lesson lesson) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				if (module.getId().equals(id)) {
					module.getLessons().add(lesson);
					return module.getLessons();
				}
			}
		}
		return null;
	}

	@GetMapping("/api/module/{mid}/lesson")
	public List<Lesson> findAllLessons(@PathVariable("mid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				if (module.getId().equals(id)) {
					return module.getLessons();
				}
			}
		}
		return null;
	}

	@GetMapping("/api/lesson/{lid}")
	public Lesson findLessonById(@PathVariable("lid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				List<Lesson> lessons = module.getLessons();
				for (int k = 0; k < lessons.size(); k++) {
					Lesson lesson = lessons.get(k);
					if (lesson.getId().equals(id)) {
						return lesson;
					}
				}
			}
		}
		return null;
	}

	@PutMapping("/api/lesson/{lid}")
	public Lesson updateLesson(@PathVariable("lid") Integer id, @RequestBody Lesson newLesson) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				List<Lesson> lessons = module.getLessons();
				for (int k = 0; k < lessons.size(); k++) {
					Lesson lesson = lessons.get(k);
					if (lesson.getId().equals(id)) {
						lessons.set(k, newLesson);
						return newLesson;
					}
				}
			}
		}
		return null;
	}

	@DeleteMapping("/api/lesson/{lid}")
	public List<Lesson> deleteLesson(@PathVariable("lid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				List<Lesson> lessons = module.getLessons();
				for (int k = 0; k < lessons.size(); k++) {
					Lesson lesson = lessons.get(k);
					if (lesson.getId().equals(id)) {
						lessons.remove(k);
						return lessons;
					}
				}
			}
		}
		return null;
	}
}
