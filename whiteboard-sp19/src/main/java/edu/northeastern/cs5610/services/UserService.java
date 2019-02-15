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
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class UserService {
	static Faculty alice = new Faculty(0, "Alice", "Jondice", "alice", "alice", "1970-02-22", "123-123-1234",
			"alice@alice.com", "English");
	static Student bob = new Student(1, "Bob", "Fallon", "bob", "bob", "1994-12-12", "234-124-5321",
			"bob@bob.com", "Physics");
	static Student charlie = new Student(2, "Charlie", "Hood", "charlie", "charlie", "1990-05-10",
			"345-123-5321", "charlie@charlie.com", "Chemistry");

	List<Person> users = new ArrayList<Person>();
	{
		users.add(alice);
		users.add(bob);
		users.add(charlie);
	}
	int uid = 3;

	@PostMapping("/api/register")
	public Person register(@RequestBody Person user, HttpSession session) {
		for (int i = 0; i < users.size(); i++) {
			Person iUser = users.get(i);
			if (user.getUsername().equals(iUser.getUsername()))
				return null;
		}
		Faculty newUser = new Faculty(uid, null, null, user.getUsername(), user.getPassword(), null, null, null, null);
		uid++;
		session.setAttribute("currentUser", newUser);
		users.add(newUser);
		return newUser;
	}

	@GetMapping("/api/profile")
	public Person profile(HttpSession session) {
		Person currentUser = (Person)session.getAttribute("currentUser");
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

	@PutMapping("/api/profile")
	public Boolean updateUser(@RequestBody Person updater, HttpSession session) {
		Person currentUser = (Person) session.getAttribute("currentUser");

		for (int i = 0; i < users.size(); i++) {
			Person user = users.get(i);
			if (user.getId().equals(currentUser.getId())) {
				users.set(i, updater);
				return true;
			}
		}
		return false;
	}
}
