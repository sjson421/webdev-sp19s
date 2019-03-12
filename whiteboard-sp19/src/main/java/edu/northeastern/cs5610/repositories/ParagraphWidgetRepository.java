package edu.northeastern.cs5610.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.*;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5610.models.ParagraphWidget;
import edu.northeastern.cs5610.models.Widget;

public interface ParagraphWidgetRepository extends CrudRepository<ParagraphWidget, Integer> {
}
