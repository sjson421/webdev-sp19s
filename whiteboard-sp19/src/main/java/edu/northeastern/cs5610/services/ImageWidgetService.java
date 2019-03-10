package edu.northeastern.cs5610.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5610.models.ImageWidget;
import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.repositories.ImageWidgetRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class ImageWidgetService {
	@Autowired
	ImageWidgetRepository widgetRep;
	
	@GetMapping("/api/image/widget/{wid}")
	public ImageWidget findWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}

	@PutMapping("/api/image/widget/{wid}")
	public ImageWidget updateWidget(@PathVariable("wid") Integer id, @RequestBody ImageWidget widget) {
		ImageWidget w = widgetRep.findById(id).get();
		w = widget;
		return widgetRep.save(w);
	}
	@DeleteMapping("/api/image/widget/{wid}")
	public void deleteWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}