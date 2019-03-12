package edu.northeastern.cs5610.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5610.models.*;
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
	
	@GetMapping("/api/widget")
	public List<Widget> findAllWidgets() {
		return (List<Widget>) widgetRep.findAll();
	}

	@PutMapping("/api/widget/{wid}")
	public Widget updateWidget(@PathVariable("wid") Integer id, @RequestBody Widget widget) {
		Widget w = widgetRep.findById(id).get();
		w = widget;
		return widgetRep.save(w);
	}

	@DeleteMapping("/api/widget/{wid}")
	public void deleteWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
	
	@PutMapping("/api/widget")
	public void updateWidgets(@RequestBody List<Widget> widgets) {
		widgetRep.saveAll(widgets);
	}
}
