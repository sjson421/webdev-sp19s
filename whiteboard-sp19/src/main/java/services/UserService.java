package services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import models.Faculty;
import models.Person;
import models.Student;

@RestController
public class UserService {
	Faculty alice = new Faculty(123, "Alice", "Jondice", "alice", "alice", "English",
			new GregorianCalendar(2014, Calendar.FEBRUARY, 11).getTime());
	Student bob = new Student(234, "Bob", "Fallon", "bob", "bob", "Physics", 
			new GregorianCalendar(2014, Calendar.FEBRUARY, 11).getTime(););

	List<Person> users = new ArrayList<Person>();
	{
		users.add(alice);
		users.add(bob);
	}

	@PostMapping("/api/courses")
	public Person createCourse(@RequestBody Course course) {
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
