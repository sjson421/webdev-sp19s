package edu.northeastern.cs5610.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5610.models.Faculty;
import edu.northeastern.cs5610.models.Person;
import edu.northeastern.cs5610.models.Student;

@RestController
@CrossOrigin(origins = "*")
public class UserService {
	Faculty alice = new Faculty(123, "Alice", "Jondice", "alice", "alice", new Date(1990, 1, 3), "English");
	Student bob = new Student(234, "Bob", "Fallon", "bob", "bob", new Date(1995, 2, 16), "Physics");
	Student charlie = new Student(345, "Charlie", "Hood", "charlie", "charlie", new Date(1984, 6, 12), "Chemistry");

	List<Person> users = new ArrayList<Person>();
	{
		users.add(alice);
		users.add(bob);
		users.add(charlie);
	}

	@PostMapping("/api/register")
	public Person register(@RequestBody Person user, HttpSession session) {
		session.setAttribute("currentUser", user);
		users.add(user);
		return user;
	}

	@GetMapping("/api/profile")
	public Person profile(HttpSession session) {
		Person currentUser = (Person) session.getAttribute("currentUser");
		return currentUser;
	}

	@PostMapping("/api/login")
	public Person login(@RequestBody Person credentials, HttpSession session) {
		for (int i = 0; i < users.size(); i++) {
			Person user = users.get(i);
			if (user.getUsername().equals(credentials.getUsername())
					&& user.getPassword().equals(credentials.getPassword())) {
				session.setAttribute("currentUser", user);
				return user;
			}
		}
		return null;
	}

	@PostMapping("/api/logout")
	public void logout(HttpSession session) {
		session.invalidate();
	}

	@GetMapping("/api/users")
	public List<Person> findAllUsers() {
		return users;
	}

	@GetMapping("/api/users/{id}")
	public Person findUserById(@PathVariable("id") Integer id) {
		for (int i = 0; i < users.size(); i++) {
			Person user = users.get(i);
			if (user.getId().equals(id)) {
				return user;
			}
		}
		return null;
	}
}
