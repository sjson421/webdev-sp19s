package services;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import models.Course;
import models.Module;

@RestController
public class ModuleService {
	List<Course> courses = CourseService.courses;

	@PostMapping("/api/courses/{cid}/modules")
	public Module createCourse(@PathVariable("cid") Integer id, @RequestBody Module module) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			if (course.getId().equals(id)) {
				course.getModules().add(module);
				return module;
			}
		}
		return null;
	}

	@GetMapping("/api/course/{cid}/modules")
	public List<Module> findAllModules(@PathVariable("cid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			if (course.getId().equals(id)) {
				return course.getModules();
			}
		}
		return null;
	}

	@GetMapping("/api/modules/{mid}")
	public Module findModuleById(@PathVariable("mid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				if (module.getId().equals(id))
					return module;
			}
		}
		return null;
	}

	@PutMapping("/api/modules/{mid}")
	public Module updateModule(@PathVariable("mid") Integer id, @RequestBody Module newModule) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				if (module.getId().equals(id)) {
					modules.set(j, newModule);
					return newModule;
				}
			}
		}
		return null;
	}

	@DeleteMapping("/api/modules/{mid}")
	public void deleteCourse(@PathVariable("mid") Integer id) {
		for (int i = 0; i < courses.size(); i++) {
			Course course = courses.get(i);
			List<Module> modules = course.getModules();
			for (int j = 0; j < modules.size(); j++) {
				Module module = modules.get(j);
				if (module.getId().equals(id)) {
					modules.remove(module);
				}
			}
		}
	}
}