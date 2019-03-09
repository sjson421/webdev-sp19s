package edu.northeastern.cs5610.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5610.models.Widget;
import edu.northeastern.cs5610.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class WidgetService {
	@Autowired
	WidgetRepository widgetRep;
	
	@GetMapping("/api/widget/{wid}")
	public Widget findWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}

	@PutMapping("/api/widget/{wid}")
	public Widget updateWidget(@PathVariable("wid") Integer id, @RequestBody Widget widget) {
		return widgetRep.save(widget);
	}
	@DeleteMapping("/api/widget/{wid}")
	public void deleteWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}
