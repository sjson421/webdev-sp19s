package edu.northeastern.cs5610.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5610.models.Faculty;
import edu.northeastern.cs5610.models.Person;
import edu.northeastern.cs5610.models.Student;
import edu.northeastern.cs5610.models.Widget;
import edu.northeastern.cs5610.repositories.PersonRepository;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class UserService {
	@Autowired
	PersonRepository rep;
	
	@PostMapping("/api/register")
	public Person register(@RequestBody Person user, HttpSession session) {
		List<Person> registered = (List<Person>) rep.findAll();
		for (int i = 0; i < registered.size(); i++) {
			Person p = registered.get(i);
			if (p.getUsername().equals(user.getUsername())) {
				return null;
			}
		}
		
		Faculty newUser = new Faculty(null, null, user.getUsername(), user.getPassword(), null, null, null, null);
		session.setAttribute("currentUser", newUser);
		rep.save(newUser);
		return newUser;
	}

	@GetMapping("/api/profile")
	public Person profile(HttpSession session) {
		Person currentUser = (Person)session.getAttribute("currentUser");
		return currentUser;
	}

	@PostMapping("/api/login")
	public Person login(@RequestBody Person credentials, HttpSession session) {
		List<Person> users = (List<Person>) rep.findAll();
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
		return (List<Person>) rep.findAll();
	}

	@GetMapping("/api/users/{id}")
	public Person findUserById(@PathVariable("id") Integer id) {
		return rep.findById(id).get();
	}

	@PutMapping("/api/profile")
	public Person updateUser(@RequestBody Person updater, HttpSession session) {
		return rep.save(updater);
	}
}
