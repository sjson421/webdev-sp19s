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

import edu.northeastern.cs5610.models.ListWidget;
import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.repositories.ListWidgetRepository;


@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class ListWidgetService {
	@Autowired
	ListWidgetRepository widgetRep;
	
	@GetMapping("/api/list/widget/{wid}")
	public ListWidget findWidgetById(@PathVariable("wid") Integer id) {
		return widgetRep.findById(id).get();
	}
	@GetMapping("/api/list/widget")
	public List<ListWidget> findAllWidgets() {
		return (List<ListWidget>) widgetRep.findAll();
	}
	@PutMapping("/api/list/widget/{wid}")
	public ListWidget updateWidget(@PathVariable("wid") Integer id, @RequestBody ListWidget widget) {
		ListWidget w = widgetRep.findById(id).get();
		w.setName(widget.getName());
		w.setType(widget.getType());
		w.setListType(widget.getListType());
		w.setItems(widget.getItems());
		return widgetRep.save(w);
	}
	@DeleteMapping("/api/list/widget/{wid}")
	public void deleteWidget(@PathVariable("wid") Integer id) {
		widgetRep.deleteById(id);
	}
}