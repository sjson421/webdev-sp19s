package edu.northeastern.cs5610.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5610.models.Course;

public interface CourseRepository extends CrudRepository<Course, Integer> {

}
