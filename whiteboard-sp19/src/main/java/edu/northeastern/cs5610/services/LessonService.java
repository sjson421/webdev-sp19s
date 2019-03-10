package edu.northeastern.cs5610.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5610.models.Course;
import edu.northeastern.cs5610.models.Lesson;
import edu.northeastern.cs5610.models.Module;
import edu.northeastern.cs5610.repositories.LessonRepository;
import edu.northeastern.cs5610.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class LessonService {
	@Autowired
	LessonRepository rep;
	
	@PostMapping("/api/module/{mid}/lesson")
	public List<Lesson> createLesson(@PathVariable("mid") Integer id, @RequestBody Lesson lesson) {
		rep.save(lesson);
		return (List<Lesson>) rep.findAll();
	}

	@GetMapping("/api/module/{mid}/lesson")
	public List<Lesson> findAllLessons(@PathVariable("mid") Integer id) {
		return (List<Lesson>) rep.findAll();
	}

	@GetMapping("/api/lesson/{lid}")
	public Lesson findLessonById(@PathVariable("lid") Integer id) {
		return rep.findById(id).get();
	}

	@PutMapping("/api/lesson/{lid}")
	public Lesson updateLesson(@PathVariable("lid") Integer id, @RequestBody Lesson newLesson) {
		Lesson c = rep.findById(id).get();
		c = newLesson;
		return rep.save(c);
	}

	@DeleteMapping("/api/lesson/{lid}")
	public List<Lesson> deleteLesson(@PathVariable("lid") Integer id) {
		rep.deleteById(id);
		return (List<Lesson>) rep.findAll();
	}
}
