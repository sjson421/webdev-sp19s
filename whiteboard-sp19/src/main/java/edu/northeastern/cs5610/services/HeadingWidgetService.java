package edu.northeastern.cs5610.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5610.models.HeadingWidget;
import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.repositories.HeadingWidgetRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class HeadingWidgetService {
	@Autowired
	HeadingWidgetRepository widgetRep;
	
	@GetMapping("/api/heading/widget/{wid}")
	public HeadingWidget findHeadingWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}

	@PutMapping("/api/heading/widget/{wid}")
	public HeadingWidget updateHeadingWidget(@PathVariable("wid") Integer id, @RequestBody HeadingWidget widget) {
		HeadingWidget w = widgetRep.findById(id).get();
		w = widget;
		return widgetRep.save(w);
	}
	@DeleteMapping("/api/heading/widget/{wid}")
	public void deleteHeadingWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}