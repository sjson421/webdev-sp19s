package edu.northeastern.cs5610.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5610.models.*;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class CourseService {
	/* Data initialization */
	static Widget headingWidget = new Widget(123,"HEADING", "I am here");
	static Widget imageWidget = new Widget(234, "IMAGE", "Image");
	static Widget linkWidget = new Widget(345, "LINK", "DOM");
	static List<Widget> widgets = new ArrayList<Widget>();
	{
		widgets.add(headingWidget);
		widgets.add(imageWidget);
		widgets.add(linkWidget);
	}

	static List<Widget> placeholderWidgets = new ArrayList<Widget>();
	static Topic dom = new Topic(123, "Document Object Model", widgets);
	static Topic goodPractice = new Topic(234, "Good Practices", placeholderWidgets);
	static List<Topic> topics = new ArrayList<Topic>();
	{
		topics.add(dom);
		topics.add(goodPractice);
	}

	static List<Topic> placeholderTopics = new ArrayList<Topic>();
	static Lesson lessonOne = new Lesson(123, "Lesson One", topics);
	static Lesson lessonTwo = new Lesson(234, "Lesson Two", placeholderTopics);
	static Lesson lessonThree = new Lesson(345, "Lesson Three", placeholderTopics);
	static List<Lesson> lessons = new ArrayList<Lesson>();
	{
		lessons.add(lessonOne);
		lessons.add(lessonTwo);
		lessons.add(lessonThree);
	}

	static List<Lesson> placeholderLessons = new ArrayList<Lesson>();
	static Module react = new Module(123, "React", lessons);
	static Module angular = new Module(234, "Angular", placeholderLessons);
	static List<Module> modules = new ArrayList<Module>();
	{
		modules.add(react);
		modules.add(angular);
	}

	static List<Module> placeholderModules = new ArrayList<Module>();
	static Course cs5610 = new Course(0, "CS5610", modules);
	static Course cs5400 = new Course(1, "CS5400", placeholderModules);
	static Course cs5700 = new Course(2, "C5700", placeholderModules);
	static List<Course> courses = new ArrayList<Course>();
	{
		courses.add(cs5610);
		courses.add(cs5400);
		courses.add(cs5700);
	}
	/* Data initialization ends */

	int courseId = 3;
	
	@PostMapping("/api/courses")
	public List<Course> createCourse(@RequestBody Course course) {
		course.setId(courseId);
		courseId++;
		courses.add(course);
		return courses;
	}

	@GetMapping("/api/courses")
	public List<Course> findAllCourses() {
		return courses;
	}

	@GetMapping("/api/courses/{cid}")
	public Course findCourseById(@PathVariable("cid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			if (course.getId().equals(id)) {
				return course;
			}
		}
		return null;
	}

	@PutMapping("/api/courses/{cid}")
	public Course updateCourse(@PathVariable("cid") Integer id, @RequestBody Course newCourse) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			if (course.getId().equals(id)) {
				courses.set(i, newCourse);
				return newCourse;
			}
		}
		return null;
	}

	@DeleteMapping("/api/courses/{cid}")
	public List<Course> deleteCourse(@PathVariable("cid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			if (course.getId().equals(id)) {
				courses.remove(course);
			}
		}
		return courses;
	}
}
