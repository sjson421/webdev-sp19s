package services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.web.bind.annotation.*;

import models.Faculty;
import models.Person;
import models.Student;

@RestController
public class UserService {
	Faculty alice = new Faculty(123, "Alice", "Jondice", "alice", "alice", new Date(1990, 1, 3), "English");
	Student bob = new Student(234, "Bob", "Fallon", "bob", "bob", new Date(1995, 2, 16), "Physics");

	List<Person> users = new ArrayList<Person>();
	{
		users.add(alice);
		users.add(bob);
	}

	@PostMapping("/api/register")
	public Person register(@RequestBody Person user) {
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).getUsername().equals(user.getUsername()))
				return null;
		}
		users.add(user);
		return user;
	}

	@GetMapping("/api/users")
	public List<Person> findAllCourses() {
		return users;
	}

	@GetMapping("/api/users/{userId}")
	public Person findUserById(@PathVariable("userId") Integer id) {
		for (int i = 0; i < users.size(); i++) {
			Person user = users.get(i);
			if (user.getId().equals(id)) {
				return user;
			}
		}
		return null;
	}

	@PutMapping("/api/users/{userId}")
	public Person updateCourse(@PathVariable("userId") Integer id, @RequestBody Person newUser) {
		for (int i = 0; i < users.size(); i++) {
			Person user = users.get(i);
			if (user.getId().equals(id)) {
				users.set(i, newUser);
				return newUser;
			}
		}
		return null;
	}

	@DeleteMapping("/api/users/{userId}")
	public void deleteCourse(@PathVariable("userId") Integer id) {
		for (int i = 0; i < users.size(); i++) {
			Person user = users.get(i);
			if (user.getId().equals(id)) {
				users.remove(user);
			}
		}
	}
}
