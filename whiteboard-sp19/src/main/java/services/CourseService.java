package services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import models.Course;

@RestController
public class CourseService {
	Course cs5610 = new Course(123, "CS5610", "me", new Date());
	Course cs5400 = new Course(234, "CS5400", "me", new Date());
	List<Course> courses = new ArrayList<Course>();
	{
		courses.add(cs5610);
		courses.add(cs5400);
	}

	@PostMapping("/api/courses")
	public Course createCourse(@RequestBody Course course) {
		courses.add(course);
		return course;
	}

	@GetMapping("/api/courses")
	public List<Course> findAllCourses() {
		return courses;
	}

	@GetMapping("/api/courses/{courseId}")
	public Course findCourseById(@PathVariable("courseId") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			if (course.getId().equals(id)) {
				return course;
			}
		}
		return null;
	}

	@PutMapping("/api/courses/{courseId}")
	public Course updateCourse(@PathVariable("courseId") Integer id, @RequestBody Course newCourse) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			if (course.getId().equals(id)) {
				courses.set(i, newCourse);
				return newCourse;
			}
		}
		return null;
	}

	@DeleteMapping("/api/courses/{courseId}")
	public void deleteCourse(@PathVariable("courseId") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			if (course.getId().equals(id)) {
				courses.remove(course);
			}
		}
	}
}
