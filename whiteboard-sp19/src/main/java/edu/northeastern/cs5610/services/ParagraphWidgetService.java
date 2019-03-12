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

import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.models.Widget;
import edu.northeastern.cs5610.repositories.ParagraphWidgetRepository;
import edu.northeastern.cs5610.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class ParagraphWidgetService {
	@Autowired
	ParagraphWidgetRepository widgetRep;
	@Autowired
	WidgetRepository rep;

	@GetMapping("/api/paragraph/widget/{wid}")
	public ParagraphWidget findWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}
	@GetMapping("/api/paragraph/widget")
	public List<ParagraphWidget> findAllWidgets() {
		return (List<ParagraphWidget>) widgetRep.findAll();
	}
	@PutMapping("/api/paragraph/widget/{wid}")
	public ParagraphWidget updateWidget(@PathVariable("wid") Integer id, @RequestBody ParagraphWidget widget) {
		ParagraphWidget w = (ParagraphWidget) rep.findById(id).get();
		w.setName(widget.getName());
		w.setType(widget.getType());
		w.setText(widget.getText());
		return widgetRep.save(w);
	}

	@DeleteMapping("/api/paragraph/widget/{wid}")
	public void deleteWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}