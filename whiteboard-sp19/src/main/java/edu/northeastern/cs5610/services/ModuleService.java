package edu.northeastern.cs5610.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5610.models.Course;
import edu.northeastern.cs5610.models.Lesson;
import edu.northeastern.cs5610.models.Module;
import edu.northeastern.cs5610.repositories.CourseRepository;
import edu.northeastern.cs5610.repositories.LessonRepository;
import edu.northeastern.cs5610.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class ModuleService {
	@Autowired
	ModuleRepository rep;
	@Autowired
	CourseRepository cRep;
	
	@PostMapping("/api/courses/{cid}/modules")
	public List<Module> createModule(@PathVariable("cid") Integer id, @RequestBody Module module) {
		List<Course> courses = (List<Course>) cRep.findAll();
		for (int i = 0; i < courses.size(); i++) {
			Course w = courses.get(i);
			if (w.getId().equals(id)) {
				module.setCourse(w);
				break;
			}
		}
		rep.save(module);
		return (List<Module>) rep.findAll();
	}

	@GetMapping("/api/courses/{cid}/modules")
	public List<Module> findAllModules(@PathVariable("cid") Integer id) {
		List<Module> returned = new ArrayList<Module>();
		List<Module> modules = (List<Module>) rep.findAll();
		
		for (int i = 0; i < modules.size(); i++) {
			Module w = modules.get(i);
			if (w.getCourse().getId().equals(id)) {
				returned.add(w);
			}
		}
		return returned;
	}

	@GetMapping("/api/modules/{mid}")
	public Module findModuleById(@PathVariable("mid") Integer id) {
		return rep.findById(id).get();
	}

	@PutMapping("/api/modules/{mid}")
	public Module updateModule(@PathVariable("mid") Integer id, @RequestBody Module newModule) {
		Module c = rep.findById(id).get();
		c.setTitle(newModule.getTitle());
		return rep.save(c);
	}

	@DeleteMapping("/api/modules/{mid}")
	public List<Module> deleteModule(@PathVariable("mid") Integer id) {
		rep.deleteById(id);
		return (List<Module>) rep.findAll();
	}
}
