package edu.northeastern.cs5610.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5610.models.LinkWidget;
import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.repositories.LinkWidgetRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class LinkWidgetService {
	@Autowired
	LinkWidgetRepository widgetRep;

	@GetMapping("/api/link/widget/{wid}")
	public LinkWidget findWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}

	@PutMapping("/api/link/widget/{wid}")
	public LinkWidget updateWidget(@PathVariable("wid") Integer id, @RequestBody LinkWidget widget) {
		LinkWidget w = widgetRep.findById(id).get();
		w = widget;
		return widgetRep.save(w);
	}

	@DeleteMapping("/api/link/widget/{wid}")
	public void deleteWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}