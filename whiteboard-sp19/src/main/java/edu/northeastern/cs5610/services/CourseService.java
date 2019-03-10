package edu.northeastern.cs5610.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5610.models.*;
import edu.northeastern.cs5610.repositories.CourseRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class CourseService {
	@Autowired
	CourseRepository courseRep;

	@PostMapping("/api/courses")
	public List<Course> createCourse(@RequestBody Course course) {
		courseRep.save(course);
		return (List<Course>) courseRep.findAll();
	}

	@GetMapping("/api/courses")
	public List<Course> findAllCourses() {
		return (List<Course>) courseRep.findAll();
	}

	@GetMapping("/api/courses/{cid}")
	public Course findCourseById(@PathVariable("cid") Integer id) {
		return courseRep.findById(id).get();
	}

	@PutMapping("/api/courses/{cid}")
	public Course updateCourse(@PathVariable("cid") Integer id, @RequestBody Course newCourse) {
		Course c = courseRep.findById(id).get();
		c = newCourse;
		return courseRep.save(c);
	}

	@DeleteMapping("/api/courses/{cid}")
	public List<Course> deleteCourse(@PathVariable("cid") Integer id) {
		courseRep.deleteById(id);
		return (List<Course>) courseRep.findAll();
	}
}
