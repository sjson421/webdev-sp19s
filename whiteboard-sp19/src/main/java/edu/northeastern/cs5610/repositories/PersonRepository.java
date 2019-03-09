package edu.northeastern.cs5610.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5610.models.Person;

public interface PersonRepository extends CrudRepository<Person, Integer> {

}
