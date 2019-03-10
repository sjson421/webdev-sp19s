package edu.northeastern.cs5610.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5610.models.Course;
import edu.northeastern.cs5610.models.Module;
import edu.northeastern.cs5610.repositories.LessonRepository;
import edu.northeastern.cs5610.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class ModuleService {
	@Autowired
	ModuleRepository rep;
	
	@PostMapping("/api/courses/{cid}/modules")
	public List<Module> createModule(@PathVariable("cid") Integer id, @RequestBody Module module) {
		rep.save(module);
		return (List<Module>) rep.findAll();
	}

	@GetMapping("/api/courses/{cid}/modules")
	public List<Module> findAllModules(@PathVariable("cid") Integer id) {
		return (List<Module>) rep.findAll();
	}

	@GetMapping("/api/modules/{mid}")
	public Module findModuleById(@PathVariable("mid") Integer id) {
		return rep.findById(id).get();
	}

	@PutMapping("/api/modules/{mid}")
	public Module updateModule(@PathVariable("mid") Integer id, @RequestBody Module newModule) {
		Module c = rep.findById(id).get();
		c = newModule;
		return rep.save(c);
	}

	@DeleteMapping("/api/modules/{mid}")
	public List<Module> deleteModule(@PathVariable("mid") Integer id) {
		rep.deleteById(id);
		return (List<Module>) rep.findAll();
	}
}
